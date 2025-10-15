<script setup>
import { onMounted, ref, inject } from 'vue'
import { useNice } from "./../lib"
const nice = useNice()
const getQuery = inject('getQuery')
const isDisabled = ref(false)
const loading = ref(true)
const data = ref([])

function _formatDateWithTime(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${day}.${month}.${year} • ${hour}:${minute<10 ? "0" : ""}${minute}`;
}

async function getTestList() {
  return [
    { id: 1, value: "Test 1" },
    { id: 2, value: "Test 2" },
    { id: 3, value: "Test 3" },
    { id: 4, value: "Test 4" },
    { id: 5, value: "Test 5" },
  ]
}

const filtersList = [
  {
    name: "Active",
    type: "yesno",
    key: 'active'
  },
  {
    name: "Promoted",
    type: "yesno",
    key: 'promoted'
  },
  {
    name: "Select test",
    type: "select",
    key: 'test',
    searchFunction: getTestList,
    formatter: (v) => `${v.id} - ${v.value}`
  }
];

const actions = ref([
  {
    title: (v) => `Go to event ${v.name}`,
    text: (v) => v.id,
    icon: () => "icon-arrow-right",
    href: (v) => `https://tickets.dev.olaii.com/event/${v.id}/`,
    disabled: (v) => isDisabled.value || v.id == 1253,
    hidden: (v) => v.id == 1455,
    plain: () => true,
    loading: () => loading.value
  },
  {
    title: () => "Select event",
    icon: () => "icon-arrow-up",
    to: (row) => ({
      name: "home",
      params: { projectId: row.id },
    }),
    disabled: (row) => isDisabled.value || row.id == 1469 || row.id == 1253,
    hidden: (row) => row.id == 1457
  },
  {
    text: () => "Test",
    icon: () => "icon-arrow-up",
    function: () => console.log("Test")
  },
])

const columns = [
  // {
  //   name: "Image",
  //   key: "image_url",
  //   html: (v) => `<img class='table-image' src="${v}" />`
  // },
  // {
  //   name: "Site",
  //   key: "news_site",
  // },
  // {
  //   name: "Photo",
  //   key: "thumbnail_photo",
  //   class: "w-0",
  //   html: (v, row) => `<img class="event-photo" src="${ v || row.cover_photo }" />`
  // },
  {
    name: "Venue",
    key: "venue_name",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Type",
    key: "type",
    fieldClass: () => "badge",
  },
  {
    name: "Start time",
    class: "text-right",
    key: "start_time",
    formatter: (v) => _formatDateWithTime(v)
  },
  {
    name: "End time",
    class: "text-right",
    key: "end_time",
    formatter: (v) => _formatDateWithTime(v)
  },
]

function filterChanged() {
  getData()
}
       
async function getData() {
  loading.value = true;
  try {
    const q = await getQuery();
    console.log("[DEMO] Query:", q)
    const response = await fetch("https://ticketing.dev.olaii.com/api/v1/events?" + new URLSearchParams(q));
    const json = await response.json();
    const fixedJson = json.results;
    fixedJson._metadata = {
      count: json.count,
      next: json.next,
      previous: json.previous
    }
    data.value = fixedJson;
    return fixedJson;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <NiceView title="Nice table and filters" :flexBody="true" :loading="loading" class="f-grow">

      <!-- Filters -->
      <NiceFilters
        v-model="filtersList"
        @change="filterChanged"
        :showCreateButton="true"
        :disableCreateButton="isDisabled"
      >
        <div class="d-flex align-center gap-2">
          <NiceSwitch noMargin title="Disabled action" v-model="isDisabled"></NiceSwitch>
          <NiceSwitch noMargin title="Loading" v-model="loading"></NiceSwitch>
          <NiceButton noMargin type="default" plain>Slot</NiceButton>
        </div>
      </NiceFilters>

      <!-- Table -->
      <NiceTable
        :actions="actions"
        :columns="columns"
        :data="data"
        :loading="loading"
        paginated
        showOrder
        showFooter
        showLimit
        @filterChange="filterChanged"
      />

      <!-- <pre>{{ data }}</pre> -->
      <!-- <pre class="mx-2">{{ filters }}</pre> -->

      <NiceWrapper class="mt-4 mb-0" collapsable :collapsed="true">
        <pre class="mx-2">
&lt;NiceFilters
  :filters="filtersList"
  @change="filterChanged"
  :showCreateButton="false"
/></pre>

          <pre>
&lt;NiceTable
  :actions="actions"
  :columns="columns"
  :data="data"
  :loading="loading"
  :showOrder="true"
  :paginated="true"
  :showFooter="true"
  @pageChange="getData"
  @orderChange="getData"
/>
          </pre>
      </NiceWrapper>
    </NiceView>
</template>

<style lang="scss">
.event-photo {
  height: 80px;
  width: 120px;
  border-radius: 4px;
  object-fit: cover;
}
</style>