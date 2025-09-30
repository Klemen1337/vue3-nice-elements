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
            isInline
            isBlock
            @change="updateQuery"
            noMargin
          />

          <!-- Date -->
          <NiceDate
            v-if="filter.type == 'date'"
            v-model="filter.value"
            :title="filter.name"
            :time="filter.time"
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
      <slot></slot>

      <!-- Create -->
      <NiceButton
        v-if="showCreateButton"
        :disabled="disableCreateButton"
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
  name: "NiceFilters"
}
</script>

<script setup>
import { onMounted, computed, inject, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const props = defineProps({
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
  disableCreateButton: {
    type: Boolean,
    default: false,
  },
  showPills: {
    type: Boolean,
    default: false,
  },
})

const $clone = inject("clone")
const $t = inject("$t")
const route = useRoute();
const router = useRouter();
const emits = defineEmits(["create", "change", "update:modelValue"])
const search = ref("")
const filters = ref(props.modelValue)
const yesNo = [
  { id: "true", name: $t('Nice', "Yes") },
  { id: "false", name: $t('Nice', "No") },
]
const searchYesNo = (search) => {
  if (!search) return yesNo;
  return yesNo.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
}

// const filters = computed(() => {
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     emits("update:modelValue", value);
//     emits("change", value);
//   }
// })

const pills = computed(() => {
  if (!filters.value) return [];
  return filters.value.filter((f) => f.value != null);
})

const rawValues = computed(() => {
  if (!filters.value) return {};
  const map = {};
  filters.value.forEach((f) => {
    map[f.key] = getFilterValue(f) || null;
  });
  return map;
})

onMounted(async () => {
  getQuery();
})

function _formatDateWithTime(filter) {
  const date = new Date(filter.value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${day}.${month}.${year} ${hour}:${minute<10 ? "0": ""}${minute}`;
}

function getFormattedValue(filter) {
  if (filter.formatter) {
    return filter.formatter(filter.value);
  }
  if (filter.type == "date") {
    return _formatDateWithTime(filter);
  }
  if (filter.type == "boolean") {
    return filter.value ? $t('Nice', "Yes") : $t('Nice', "No");
  }
  if (filter.valueName) return filter.value[filter.valueName];
  if (filter.value?.name) return filter.value.name;
  if (filter.value?.value) return filter.value.value;
  return filter.value;
}

function getFilterValue(f) {
  if (!f) return null
  if (f.type == "date") {
    if (!f.value) return null;
    if (isNaN(new Date(f.value))) return null;
    return f.value ? new Date(f.value).toISOString() : null;
  }
  return (
    f.valueRaw ||
    (f.getKey ? f.getKey(f.value) : null) ||
    f.value?.id ||
    f.value
  );
}

async function getQuery() {
  await router.isReady();
  const query = $clone(route.query);
  if (query.search) {
    search.value = query.search
  }
  filters.value.forEach(async filter => {
    const value = query[filter.key]
    if (filter.type == "yesno") {
      let p = yesNo.find(
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
    } else if (filter.type == "select" && filter.searchFunction) {
      const p = await filter.searchFunction();
      filter.value = p.find(i => i[filter.keyName || 'id'] == value);
    } else {
      console.log("[NiceFilters] Query not handled: ", filter.key, value)
    }
  });
  // emits("change", { ...rawValues.value, search: search.value });

  setTimeout(() => {
    emits("update:modelValue", filters);
    emits("change", filters);
  })
}

async function updateQuery() {
  // console.log("updateQuery", filters[0].value)
  setTimeout(async() => {
    await router.isReady();
    const query = {
      ...route.query,
      ...rawValues.value,
      search: search.value,
    };
    filters.value.forEach(f => {
      const filterValue = getFilterValue(f)
      query[f.key] = filterValue
    })
    const cleanQuery = Object.keys(query).filter((k) => query[k] != null && query[k] != "")
      .reduce((a, k) => ({ ...a, [k]: query[k] }), {})
    router.push({ query: cleanQuery });
    await router.isReady();
    // emits("change", { ...rawValues.value, search: search.value });
    setTimeout(() => {
      emits("update:modelValue", filters.value);
      emits("change", filters.value);
    })
  });
}

async function create() {
  const query = { ...route.query, id: "new" };
  router.push({ query });
  await router.isReady();
  emits("create");
}

function clearFilter(filter) {
  filter.value = null;
  updateQuery();
}
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
  flex-wrap: wrap;
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
