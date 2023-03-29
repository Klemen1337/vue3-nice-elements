<template>
  <!-- Filters -->
  <div class="nice-component nice-filters">
    <!-- Search -->
    <NiceInput
      :placeholder="$gettext('Search...')"
      icon="icon-search"
      v-model="search"
      class="w-300"
      no-margin
      @debounce="updateQuery"
    />

    <!-- Filters -->
    <NicePopup v-if="filters" no-padding no-margin>
      <template #trigger>
        <NiceButton
          type="white"
          plain
          icon="icon-filter"
          class="nice-filters-btn"
        >
          {{ $gettext("Filters") }}
        </NiceButton>
      </template>

      <template #content>
        <div class="nice-filters-filters">
          <!-- <h4 class="mt-0">Filters</h4> -->
          <div
            class="nice-filters-filter"
            v-for="filter in filters"
            :key="filter.key"
          >
            <!-- Boolean -->
            <NiceSwitch
              v-if="filter.type == 'boolean'"
              :title="filter.name"
              v-model="filter.value"
              @change="updateQuery"
            />

            <!-- Date -->
            <NiceDate
              v-if="filter.type == 'date'"
              :title="filter.name"
              v-model="filter.value"
              @change="updateQuery"
            />

            <!-- Select -->
            <NiceDropdown
              v-if="filter.type == 'select'"
              :title="filter.name"
              v-model="filter.value"
              :search-function="filter.searchFunction"
              @change="updateQuery"
              nullable
              :valueName="filter.valueName"
              :keyName="filter.keyName"
              :formatFunction="filter.formatter"
            />

            <!-- Yes no -->
            <NiceDropdown
              v-if="filter.type == 'yesno'"
              :title="filter.name"
              v-model="filter.value"
              :search-function="searchYesNo"
              @change="updateQuery"
              :nullText="$gettext('All')"
              nullable
              noSearch
            />
          </div>
        </div>
      </template>
    </NicePopup>

    <div class="grow"></div>

    <!-- Create -->
    <NiceButton
      :text="$gettext('Create')"
      icon="icon-plus"
      @click="create"
      v-if="showCreateButton"
    />
  </div>

  <div class="nice-component nice-filters-pills" v-if="pills">
    <div
      class="nice-filters-pill badge badge-primary"
      v-for="filter in pills"
      :key="filter.key"
      :title="filter.description"
    >
      <div>
        <small>{{ filter.name }}</small>
        <div>
          {{ getFormattedValue(filter) }}
        </div>
      </div>
      <NiceButton icon="icon-x" @click="clearFilter(filter)" />
    </div>
  </div>
  <!-- {{ filters }} -->
  <!-- {{ rawValues }} -->
  <!-- {{ pills }} -->
</template>

<script>
import NiceButton from "./NiceButton.vue";
import NiceInput from "./NiceInput.vue";
import NicePopup from "./NicePopup.vue";
import NiceDropdown from "./NiceDropdown.vue";
import NiceDate from "./NiceDate.vue";
import NiceSwitch from "./NiceSwitch.vue";

export default {
  name: "NiceFilters",

  components: {
    NiceButton,
    NiceInput,
    NicePopup,
    NiceSwitch,
    NiceDropdown,
    NiceDate,
  },

  props: {
    filters: {
      type: Object,
      required: false,
    },
    showCreateButton: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["create", "change"],

  data() {
    return {
      search: "",
      yesNo: [
        { id: "true", name: this.$gettext("Yes") },
        { id: "false", name: this.$gettext("No") },
      ],
      searchYesNo: (search) => {
        if (!search) return this.yesNo;
        return this.yesNo.filter((s) =>
          s.name.toLowerCase().includes(search.toLowerCase())
        );
      },
    };
  },

  computed: {
    pills() {
      if (!this.filters) return [];
      return this.filters.filter((f) => f.value);
    },

    rawValues() {
      if (!this.filters) return {};
      const map = {};
      this.filters.forEach((f) => {
        map[f.key] = this.getFilterValue(f);
      });
      return map;
    },
  },

  async mounted() {
    this.getQuery();
  },

  methods: {
    getFormattedValue(filter) {
      if (filter.formatter) {
        return filter.formatter(filter.value);
      }
      if (filter.type == "date") {
        return this.$formatDateWithTime(filter.value);
      }
      if (filter.type == "boolean") {
        return filter.value ? this.$gettext("Yes") : this.$gettext("No");
      }
      if (filter.valueName) return filter.value[filter.valueName];
      if (filter.value.name) return filter.value.name;
      return filter.value;
    },

    getFilterValue(f) {
      if (f.type == "date") {
        return f.value ? new Date(f.value).toISOString() : null;
      }
      return (
        f.valueRaw ||
        (f.getKey ? f.getKey(f.value) : null) ||
        f.value?.id ||
        f.value
      );
    },

    getQuery() {
      const newFilters = this.$clone(this.$route.query);
      delete newFilters.id;
      Object.keys(newFilters).forEach(async (key) => {
        if (key == "search") return (this.search = newFilters[key]);
        const filter = this.filters.find((f) => f.key == key);
        // console.log(key, newFilters[key], filter);
        if (filter) {
          if (filter.type == "yesno") {
            filter.value = this.yesNo.find(
              (y) => y.id == newFilters[key]
            );
          }
          if (filter.type == "date") {
            filter.value = new Date(newFilters[key]);
          }
          if (filter.type == "boolean") {
            filter.value = newFilters[key] == "true";
          }
          if (filter.type == "select" && filter.fetch) {
            const p = await filter.fetch(newFilters[key]);
            filter.value = p;
          }
        }
      });
      // this.$emit("change", { ...this.rawValues, search: this.search });
    },

    updateQuery() {
      setTimeout(() => {
        const query = {
          ...this.$route.query,
          ...this.rawValues,
          search: this.search,
        };
        let cleanQuery = Object.keys(query)
          .filter((k) => query[k] != null && query[k] != "")
          .reduce((a, k) => ({ ...a, [k]: query[k] }), {});
        // console.log("updateQuery", cleanQuery);
        this.$router.push({ query: cleanQuery });
        // console.log(
        //   "updateQuery",
        //   { query: cleanQuery },
        //   { ...this.rawValues, search: this.search }
        // );
        this.$emit("change", { ...this.rawValues, search: this.search });
      });
    },

    create() {
      const query = { ...this.$route.query, id: "new" };
      this.$router.push({ query });
      this.$emit("create");
    },

    clearFilter(filter) {
      filter.value = null;
      this.updateQuery();
    },
  },
};
</script>

<style lang="scss" scoped>
.nice-filters-btn {
  border: 1px solid var(--border-color);
}
.nice-filters-filters {
  width: 250px;
  max-height: 400px;
  padding: 1.5rem;
  padding-bottom: 0.5rem;
  overflow: auto;
}
.nice-filters-pills {
  margin-top: -1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;

  .nice-filters-pill {
    padding: 4px 8px;
    display: flex;
    align-items: center;

    .btn {
      padding: 0;
      border: 0;
      height: 0;
      margin-left: 4px;
    }

    // &:has(.btn:hover) {
    //   background-color: var(--danger-color-lighter);
    //   color: var(--danger-color);
    // }

    .btn .nice-icon {
      height: 13px;
      width: 13px;
    }
  }
}
</style>
