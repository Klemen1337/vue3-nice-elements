<template>
  <div class="nice-filters-wrapper">
    <!-- Filters -->
    <div class="nice-component nice-filters">
      <!-- Search -->
      <NiceInput
        :title="$t('Nice', 'Search')"
        :placeholder="$t('Nice', 'Search...')"
        icon="icon-search"
        v-model="search"
        class="w-300"
        no-margin
        @debounce="updateQuery"
      />

      <div class="nice-filters-options" v-if="filters">
        <!-- <h4 class="mt-0">Filters</h4> -->
        <div
          class="nice-filters-filter"
          v-for="filter in filters"
          :key="filter.key"
        >
          <!-- Boolean -->
          <NiceSwitch
            v-if="filter.type == 'boolean'"
            v-model="filter.value"
            :title="filter.name"
            @change="updateQuery"
            noMargin
          />

          <!-- Date -->
          <NiceDate
            v-if="filter.type == 'date'"
            v-model="filter.value"
            :title="filter.name"
            @change="updateQuery"
            noMargin
          />

          <!-- Select -->
          <NiceDropdown
            v-if="filter.type == 'select'"
            v-model="filter.value"
            :title="filter.name"
            :search-function="filter.searchFunction"
            :valueName="filter.valueName"
            :keyName="filter.keyName"
            :formatFunction="filter.formatter"
            @change="updateQuery"
            nullable
            noMargin
          />

          <!-- Yes no -->
          <NiceDropdown
            v-if="filter.type == 'yesno'"
            v-model="filter.value"
            :title="filter.name"
            :search-function="searchYesNo"
            :nullText="$t('Nice', 'All')"
            @change="updateQuery"
            valueName="name"
            nullable
            noSearch
            noMargin
          />
        </div>
      </div>

      <div class="f-grow"></div>

      <!-- Create -->
      <NiceButton
        v-if="showCreateButton"
        :text="$t('Nice', 'Create')"
        @click="create"
        icon="icon-plus"
      />
    </div>

    <div class="nice-component nice-filters-pills" v-if="showPills && pills && pills.length">
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
    <!-- <pre>{{ filters }}</pre> -->
    <!-- <pre>{{ modelValue }}</pre> -->
    <!-- <pre>{{ rawValues }}</pre> -->
    <!-- <pre>{{ pills }}</pre> -->
  </div>
</template>

<script>

export default {
  name: "NiceFilters",

  props: {
    // filters: {
    //   type: Object,
    //   required: false,
    // },
    modelValue: {
      type: Object,
      required: true,
    },
    showCreateButton: {
      type: Boolean,
      default: true,
    },
    showPills: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["create", "change", "update:modelValue"],

  data() {
    return {
      search: "",
      filters: this.modelValue,
      yesNo: [
        { id: "true", name: this.$t('Nice', "Yes") },
        { id: "false", name: this.$t('Nice', "No") },
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
    // filters: {
    //   get() {
    //     console.log("filters", this.modelValue)
    //     return this.modelValue;
    //   },
    //   set(value) {
    //     console.log("filters updated", value)
    //     this.$emit("update:modelValue", value);
    //     this.$emit("change", value);
    //   }
    // },

    pills() {
      if (!this.filters) return [];
      return this.filters.filter((f) => f.value != null);
    },

    rawValues() {
      if (!this.filters) return {};
      const map = {};
      this.filters.forEach((f) => {
        map[f.key] = this.getFilterValue(f) || null;
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
        return filter.value ? this.$t('Nice', "Yes") : this.$t('Nice', "No");
      }
      if (filter.valueName) return filter.value[filter.valueName];
      if (filter.value?.name) return filter.value.name;
      if (filter.value?.value) return filter.value.value;
      return filter.value;
    },

    getFilterValue(f) {
      if (!f) return null
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

    async getQuery() {
      await this.$router.isReady();
      const query = this.$clone(this.$route.query);
      this.filters.forEach(async filter => {
        // console.log(filter, query[filter.key]);
        const value = query[filter.key]
        if (filter.type == "yesno") {
          let p = this.yesNo.find(
            (y) => y.id == query[filter.key]
          )
          if (!query[filter.key]) p = null;
          filter.value = p;
        }
        else if (filter.type == "date") {
          filter.value = new Date(value);
        }
        else if (filter.type == "boolean") {
          filter.value = value == "true";
        }
        else if (filter.type == "select" && filter.fetch) {
          const p = await filter.fetch(value);
          filter.value = p;
        } else {
          console.log("[NiceFilters] Query not handeled: ", filter.key, value)
        }
      });
      // this.$emit("change", { ...this.rawValues, search: this.search });

      setTimeout(() => {
        this.$emit("update:modelValue", this.filters);
        this.$emit("change", this.filters);
      })
    },

    async updateQuery() {
      // console.log("updateQuery", this.filters[0].value)
      setTimeout(async() => {
        await this.$router.isReady();
        const query = {
          ...this.$route.query,
          ...this.rawValues,
          search: this.search,
        };
        this.filters.forEach(f => {
          const filterValue = this.getFilterValue(f)
          query[f.key] = filterValue
        })
        let cleanQuery = Object.keys(query).filter((k) => query[k] != null && query[k] != "")
          .reduce((a, k) => ({ ...a, [k]: query[k] }), {})
        this.$router.push({ query: cleanQuery });
        await this.$router.isReady();
        // this.$emit("change", { ...this.rawValues, search: this.search });
        setTimeout(() => {
          this.$emit("update:modelValue", this.filters);
          this.$emit("change", this.filters);
        })
      });
    },

    async create() {
      const query = { ...this.$route.query, id: "new" };
      this.$router.push({ query });
      await this.$router.isReady();
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
// .nice-filters {
//   margin-bottom: 1rem;
// }
.nice-filters-btn {
  border: 1px solid var(--nice-border-color);
}

.nice-filters-options {
  display: flex;
  gap: 1rem;
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
    line-height: 1;

    .btn {
      padding: 0;
      border: 0;
      height: 0;
      margin-left: 4px;

      .svg {
        height: 13px;
        width: 13px;
      }
    }

    // &:has(.btn:hover) {
    //   background-color: var(--nice-danger-color-lighter);
    //   color: var(--nice-danger-color);
    // }
  }
}
</style>
