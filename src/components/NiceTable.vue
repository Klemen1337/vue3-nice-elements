<template>
  <div class="nice-table">
    <div class="nice-table-table-wrapper">
      <table class="nice-table-table">
        <!-- Header -->
        <thead>
          <tr>
            <th class="w-0" v-if="selectMultiple">
              <!-- De/Select all -->
              <NiceCheckbox :modelValue="allSelected" no-margin @click="toggleSelectAll" />
            </th>
            <th v-for="column in enabledColumns" :key="column.key" :class="column.class">
              <!-- Order -->
              <div
                v-if="showOrder"
                class="table-th"
                @click="setOrder(column)"
                :class="{
                  'active asc': order == column.key,
                  'active desc': order == '-' + column.key
                }"
              >
                <span>{{ column.name }}</span>
                <NiceIcon icon="icon-bar-chart" class="table-order" v-if="showOrder" />
              </div>
              <span v-else>{{ column.name }}</span>
            </th>
            <th
              class="actions-td w-0"
              :class="{ 'freeze-column-right': freezeLastColumn }"
              v-if="!!actions.length"
            >
              <!-- Toggle columns -->
              <NicePopup class="actions-columns" placement="bottom-end" no-padding>
                <template #trigger>
                  <NiceIcon icon="icon-plus-circle" />
                </template>

                <template #content>
                  <div class="list">
                    <div
                      class="element"
                      v-for="column in columns"
                      :key="column.key"
                      @click="toggleColumn(column)"
                    >
                      <NiceCheckbox :modelValue="!column.disabled" :title="column.name" no-margin />
                    </div>
                  </div>
                </template>
              </NicePopup>
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody>
          <tr v-for="row in innerData" :key="row.id">
            <td class="w-0" v-if="selectMultiple">
              <!-- Select -->
              <NiceCheckbox :modelValue="row._selected" @click="toggleSelect(row)" no-margin />
            </td>
            <!-- Column -->
            <td v-for="column in enabledColumns" :key="column.key" :class="column.class">
              <!-- Component -->
              <component
                v-if="column.component"
                :is="column.component().instance"
                v-bind="column.component(row[column.key], row).props"
              />

              <!-- Html -->
              <span
                v-if="!column.component && column.html"
                v-html="column.html(row[column.key], row)"
              ></span>

              <!-- Value or formatter -->
              <span
                v-if="!column.component && !column.html"
                :class="column.fieldClass ? column.fieldClass(row[column.key], row) : ''"
              >
                {{ column.formatter ? column.formatter(row[column.key], row) : row[column.key] }}
              </span>
            </td>
            <td
              class="actions-td"
              :class="{ 'freeze-column-right': freezeLastColumn }"
              v-if="!!actions.length"
            >
              <!-- Actions -->
              <div v-for="action in actions" :key="action">
                <router-link :to="action.to(row)" v-if="action.to">
                  <NiceButton
                    :icon="action.icon"
                    :type="action.type"
                    :text="action.text"
                    size="small"
                    @click="action.function"
                  />
                </router-link>
                <NiceButton
                  v-else
                  :icon="action.icon"
                  :type="action.type"
                  :text="action.text"
                  size="small"
                  @click="action.function(row)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Loading -->
    <NiceLoading v-if="loading" />

    <!-- No data -->
    <div class="no-data" v-if="!loading && data.length == 0">
      {{ $t('Nice', 'No data.') }}
    </div>

    <!-- Footer -->
    <div class="nice-table-footer" v-if="showFooter">
      <div class="pagination-info">
        <!-- Showing {{ data.length }} of  -->
        {{ count }} {{ $t('Nice', 'total') }}
      </div>
      <div class="pagination" v-if="paginated && pages > 1 && pages < 5">
        <!-- <NiceButton
          size="small"
          @click="firstPage"
          plain
          icon="icon-chevrons-left"
        />
        <NiceButton
          size="small"
          @click="prevPage"
          plain
          icon="icon-chevron-left"
        /> -->
        <NiceButton
          size="small"
          :plain="currentPage !== page"
          v-for="page in pages"
          :key="page"
          :class="currentPage === page ? 'btn-primary' : 'btn-default'"
          @click="setPage(page)"
        >
          {{ page }}
        </NiceButton>
        <!-- <NiceButton
          size="small"
          @click="nextPage"
          plain
          icon="icon-chevron-right"
        />
        <NiceButton
          size="small"
          @click="lastPage"
          plain
          icon="icon-chevrons-right"
        /> -->
      </div>
      <div class="pagination-dropdown" v-if="paginated && pages > 1 && pages > 5">
        <!-- Page -->
        <NiceDropdown
          v-model="currentPageDropdown"
          :values="pagesList"
          keyOnly
          noMargin
          @change="setPage"
        ></NiceDropdown>
      </div>

      <!-- Limit -->
      <NiceDropdown
        v-if="showLimit"
        v-model="limit"
        :class="{ 'dropdown-small': pages > 1 && pages < 5}"
        :values="limits"
        keyOnly
        noMargin
        @change="setLimit"
      ></NiceDropdown>
    </div>

    <!-- <pre>{{ innerData }}</pre> -->
    <!-- <pre>{{ selectedItems }}</pre> -->
  </div>
</template>

<script>
import NiceCheckbox from './NiceCheckbox.vue'
import NiceLoading from './NiceLoading.vue'
import NiceButton from './NiceButton.vue'
import NicePopup from './NicePopup.vue'

export default {
  name: 'NiceTable',

  components: {
    NiceCheckbox,
    NiceLoading,
    NiceButton,
    NicePopup
  },

  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
      // {
      //   name: "Created",
      //   key: "created_at",
      //   class: "text-right",
      //   formatter: (value, row) => formatDateWithTime(value),
      //   fieldClass: (value, row) => "badge " + CommonService.types[value],
      //   html: (value, row) => `<div>${value}</div>`,
      // },
    },
    actions: {
      type: Array,
      default: () => []
      // {
      //   text: "Edit",
      //   icon: "icon-edit",
      //   type: "primary",
      //   to: (row) => ({
      //     name: "app.sandbox",
      //     query: { test: row.id },
      //   }),
      //   function: (row) => {
      //     this.$router.push({ name: "app.sandbox" });
      //   },
      // }
    },
    selectMultiple: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    },
    showOrder: {
      type: Boolean,
      default: false
    },
    showLimit: {
      type: Boolean,
      default: false
    },
    paginated: {
      type: Boolean,
      default: false
    },
    freezeFirstColumn: {
      type: Boolean,
      default: false
    },
    freezeLastColumn: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  emits: ['selected', 'orderChange', 'pageChange', 'filterChange'],

  data() {
    return {
      order: undefined,
      limit: 50,
      // limits: [20, 50, 100],
      limits: [
        { id: 10, value: 10 },
        { id: 20, value: 20 },
        { id: 50, value: 50 },
        { id: 100, value: 100 },
      ],
      currentPage: 1,
      currentPageDropdown: null
    }
  },

  computed: {
    count() {
      return this.data?._metadata?.count || 0
    },

    pages() {
      return Math.ceil(this.count / this.limit) || 1
    },

    pagesList() {
      return Array.from({ length: this.pages }, (v, i) => ({ id: i + 1, value: i + 1 }))
    },

    enabledColumns() {
      return this.columns.filter((c) => !c.disabled)
    },

    innerData() {
      let newData = this.data

      // Inject _selected
      newData.forEach((d) => {
        if (d._selected === undefined) d._selected = false
      })

      // Order by
      if (this.order !== undefined) {
        const cleanOrder = this.order.replace('-', '')
        newData.sort((a, b) => {
          if (this.order[0] != '-') {
            const temp = a
            a = b
            b = temp
          }
          return String(a[cleanOrder]).localeCompare(String(b[cleanOrder]))
        })
      }
      return newData
    },

    selectedItems() {
      return this.innerData.filter((row) => row._selected)
    },

    allSelected() {
      return this.selectedItems.length == this.innerData.length
    }
  },

  async mounted() {
    const query = await this.$query()
    // console.log("[DEMO] Query:", query)
    this.order = query.ordering
    if (this.paginated) {
      this.limit = Number(query.limit) || 50
      this.currentPage = Number(query.page) || 1
      this.currentPageDropdown = Number(query.page) || 1
      this.setPage(this.currentPage)
    }
  },

  methods: {
    getPageList() {
      return this.pagesList
    },

    toggleSelectAll() {
      let selected = true
      if (this.allSelected) selected = false
      this.innerData.forEach((row) => (row._selected = selected))
      this.emitSelected()
    },

    toggleSelect(row) {
      row._selected = !row._selected
      this.emitSelected()
    },

    emitSelected() {
      this.$emit('selected', this.selectedItems)
    },

    toggleColumn(column) {
      column.disabled = !column.disabled
    },

    setOrder(column) {
      if (column.key == this.order) this.order = '-' + column.key
      else if (this.order && this.order[0] === '-' && this.order === '-' + column.key)
        this.order = undefined
      else this.order = column.key
      
      this.$router.push({
        query: { ...this.$route.query, ordering: this.order }
      })
      this.$emit('orderChange', this.order)
      this.$emit('filtersChange')
    },

    firstPage() {
      this.setPage(1)
    },

    lastPage() {
      this.setPage(this.pages)
    },

    nextPage() {
      const newPage = this.currentPage + 1
      if (newPage <= this.pages) this.setPage(newPage)
    },

    prevPage() {
      const newPage = this.currentPage - 1
      if (newPage > 0) this.setPage(newPage)
    },

    async setPage(page) {
      this.currentPage = page
      this.$router.replace({
        path: this.$route.path,
        query: { ...this.$route.query, page, offset: ((page-1)*this.limit), limit: this.limit }
      })
      this.$emit('pageChange', page)
      this.filterChange()
    },

    setLimit(limit) {
      this.limit = limit
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, limit }
      })
      this.$emit('pageChange', this.currentPage)
      this.filterChange()
    },

    filterChange() {
      this.$emit('filterChange', { ordering: this.order, page: this.currentPage, offset: ((this.currentPage-1)*this.limit), limit: this.limit })
    }
  }
}
</script>

<style lang="scss" scoped>
.nice-table {
  background: var(--nice-card-bg);
  border-radius: var(--nice-border-radius);
  border: 1px solid var(--nice-border-color);
  overflow: auto;
  position: relative;
  min-height: 41px;

  display: flex;
  flex-direction: column;

  .nice-table-table-wrapper {
    flex-grow: 1;
    overflow: auto;

    // Scrollbar
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: var(--nice-card-bg);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--nice-primary-color);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--nice-primary-color-darker);
    }
  }

  .nice-indicator {
    display: block;
    border-radius: var(--nice-border-radius);
    height: 10px;
    width: 10px;
    background: var(--nice-danger-color);

    &.active {
      background: var(--nice-success-color);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    vertical-align: middle;

    thead {
      position: sticky;
      top: 0;
      z-index: 2;

      &:before {
        position: absolute;
        bottom: -1px;
        left: 0;
        content: '';
        height: 1px;
        width: 100%;
        background: var(--nice-border-color);
      }

      tr {
        th {
          text-align: left;
          text-transform: uppercase;
          font-size: 0.8em;
          font-weight: 600;
          padding: 12px 10px;
          background: var(--nice-card-bg);

          .table-th {
            position: relative;
            cursor: pointer;

            &:hover {
              color: var(--nice-primary-color);
            }

            &.active {
              color: var(--nice-primary-color);

              .table-order {
                display: inline-block;
              }
            }

            &.asc {
              .table-order {
                transform: translateY(-50%) rotate(-90deg);
              }
            }

            .table-order {
              height: 10px;
              width: 10px;
              margin-left: 3px;
              transform: translateY(-50%) rotate(90deg);
              position: absolute;
              display: none;
              top: 50%;
            }
          }
        }
      }
    }

    tbody {
      tr {
        td {
          border-top: 1px solid var(--nice-border-color);
          padding: 12px 10px;
          background: var(--nice-card-bg);
        }

        &:hover {
          td {
            background: var(--nice-hover-color);
          }
        }

        &:first-child {
          td {
            border-top: 0 none;
          }
        }
      }
    }

    tr {
      td,
      th {
        vertical-align: middle;

        // &:first-child {
        //   padding-left: 1.5rem;
        // }

        // &:last-child {
        //   padding-right: 1.5rem;
        // }
      }
    }
  }

  .freeze-column {
    position: sticky;
    left: 0;
    z-index: 1;
  }

  .freeze-column-right {
    position: sticky;
    right: 0;
    z-index: 1;
  }

  .actions-td {
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: right;
  }

  .actions-columns {
    .nice-icon {
      color: var(--nice-primary-color);
      height: 20px;
      width: 20px;
    }
  }

  .no-data,
  .nice-loading {
    border-top: 1px solid var(--nice-border-color);
    padding: 2rem;
    text-align: center;
  }

  .no-data {
    color: var(--nice-border-color);
    font-size: 0.8em;
  }

  .nice-table-footer {
    border-top: 1px solid var(--nice-border-color);
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    .pagination-info {
      flex-grow: 1;
      font-size: 0.8rem;
      opacity: 0.5;
    }

    .pagination-dropdown {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.5rem;
    }

    .pagination {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.3rem;
      flex-grow: 1;
      justify-content: flex-end;

      .btn + .btn {
        margin-left: 0;
      }
    }
  }
}
</style>
