<script setup>
import { onMounted, ref, inject } from 'vue'
import { useNice } from "./../lib"
const nice = useNice()
const getQuery = inject('getQuery')
const isDisabled = ref(false)
const loading = ref(true)
const data = ref([])
const filtersList = [
];

function _formatDateWithTime(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${day}.${month}.${year} • ${hour}:${minute<10 ? "0" : ""}${minute}`;
}

const actions = ref([
  {
    icon: "icon-arrow-right",
    function: (v) => window.open("https://tickets.dev.olaii.com/event/" + v.id + "/", '_blank').focus(),
    disabled: isDisabled
  },
  {
    icon: "icon-arrow-up",
    to: (row) => ({
      name: "home",
      params: { projectId: row.id },
    }),
    disabled: (row) => isDisabled.value || row.id == 1469 ,
    hidden: (row) => row.id == 1457
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
  {
    name: "Photo",
    key: "thumbnail_photo",
    class: "w-0",
    html: (v, row) => `<img class="event-photo" src="${ v || row.cover_photo }" />`
  },
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
    const response = await fetch("https://ticketing.dev.olaii.com/api/v2/events?" + new URLSearchParams(q));
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
    <NiceView title="Nice table and filters" :flexBody="true" class="f-grow">

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