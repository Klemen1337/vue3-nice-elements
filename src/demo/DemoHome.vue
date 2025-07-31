<script setup>
import { onMounted, ref, inject } from 'vue'
import { useNice } from "./../lib"
const nice = useNice()
const getQuery = inject('getQuery')


const list = [
  { id: 1, value: 'List 1' },
  { id: 2, value: 'List 2' },
  { id: 3, value: 'List 3' },
  { id: 4, value: 'List 4' },
  { id: 5, value: 'List 5' }
]
async function searchList(search) {
  if (!search) return list;
  return list.filter((s) =>
    s.value.toLowerCase().includes(search.toLowerCase())
  );
}

async function searchEvents(search) {
  try {
    const q = {
      limit: 10
    };
    if (search) q.search = search;
    const response = await fetch("https://ticketing.dev.olaii.com/api/v2/events?" + new URLSearchParams(q));
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function formatCurrency (amount) {
  const numberFormat = new Intl.NumberFormat("sl-SI", {
    style: "currency",
    currency: "EUR",
  })
  const value = numberFormat.format(amount);
  return value;
}

function _formatDateWithTime(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${day}.${month}.${year} ${hour}:${minute<10 ? "0" : ""}${minute}`;
}

async function getFromList(id) {
  return list.find((s) =>
    s.id == id
  );
}

const types = ['primary', 'default', 'success', 'warning', 'danger', 'info', 'dark', 'white']
const selectedIcon = ref('icon-check')
const loading = ref(false)
const show = ref(false)
const isDisabled = ref(false)
setTimeout(() => {
  show.value = true
}, 500)
const icons = ref([])
const testForm = ref({
  name: "",
  email: "",
  comment: "",
  price: 10,
  list: {
    "id": 4,
    "value": "List 4"
  },
  listSimple: 2
})
const form = ref({
  niceUpload: null,
  niceInputName: '',
  niceInputEmail: '',
  niceDropdown: {
    "id": 3,
    "value": "List 3"
  },
  niceDropdownSimple: {
    "id": 3,
    "value": "List 3"
  }, 
  niceDropdownArray: [
    {
      "id": 1280,
      "name": "Mladinsko gledališče Ljubljana",
      "type": "NORMAL",
      "thumbnail_photo": "https://olaii-static.s3.amazonaws.com/media/public/3850_1661161400_mladinsko_predstavitev65.jpg",
      "cover_photo": null,
      "thumbnail_video": null,
      "cover_video": null,
      "start_time": "2024-12-12T18:00:00Z",
      "end_time": "2025-12-13T02:00:00Z",
      "timezone": "Europe/Ljubljana",
      "venue_name": "The Mladinsko Theatre",
      "hide_end_time": false,
      "i18n": {
        "name": {}
      }
    }
  ],
  niceSwitch: false,
  niceDate: null,
})

const data = ref([])
const filtersList = [
  {
    type: "select",
    name: "List",
    key: "something",
    value: null,
    searchFunction: searchList,
    fetch: getFromList
  },
  {
    type: "date",
    name: "To date",
    key: "to_date",
    time: false,
    value: null,
  },   {
    type: "date",
    name: "From date",
    key: "from_date",
    time: false,
    value: null,
  }, 
  {
    type: "yesno",
    name: "Has event",
    help: "Get all documents that have a related event.",
    key: "has_event",
    value: null,
  }, 
  {
    type: "yesno",
    name: "Has launch",
    help: "Get all documents that have a related launch.",
    key: "has_launch",
    value: null,
  },
  {
    type: "boolean",
    name: "Boolean",
    key: "boolean",
    value: null,
  }, 
];
const actions = [
  {
    icon: "icon-target",
    function: (v) => window.open(v.url, '_blank').focus()
  },
  // {
  //   icon: "icon-arrow-right",
  //   to: (row) => ({
  //     name: "app.projects",
  //     params: { projectId: row.id },
  //   }),
  // },
]
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
    name: "Title",
    key: "title",
    html: (v, row) => `<div>
      <small>${row.news_site}</small>
      <div>${v}</div>
    </div>`
  },
  {
    name: "Summary",
    key: "summary",
    class: "text-italic text-small"
  },
  {
    name: "Published",
    class: "text-right",
    key: "published_at",
    formatter: (v) => _formatDateWithTime(v)
  },  
]
       

async function getData() {
  const q = await getQuery();
  loading.value = true;
  try {
    const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?" + new URLSearchParams(q));
    const jsonResponse = await response.json()
    data.value = jsonResponse.results
    data.value._metadata = {
      count: jsonResponse.count,
      next: jsonResponse.next,
      previous: jsonResponse.previous,
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false;
  }
}

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}

function randomShit() {
  const value = list[Math.floor(Math.random() * list.length)]
  testForm.value.list = value
}

function onChange() {
  console.log(...arguments)
}

function filterChanged() {
  getData()
}

function openModal(e) {
  nice.modal('modal', true, e)
}

function openModal2() {
  nice.modal('modal', true)
}

function openPanelRight() {
  nice.panel('panel-right', true)
}

function openPanelLeft() {
  nice.panel('panel-left', true)
}

function openPanelTop() {
  nice.panel('panel-top', true)
}

function openPanelBottom() {
  nice.panel('panel-bottom', true)
}

function openToast(text) {
  nice.toast(text ? text : 'This is a test')
}

function openNotification() {
  nice.notification('This is a test')
}

function notification(type) {
  nice.notification(
    "Fruitcake chodolate bar tooties roll gummies gummies jelly beans cake.",
    type,
    "Notification " + type,
    "icon-life-buoy"
  );
}

onMounted(() => {
  icons.value = Array.from(document.getElementsByTagName('symbol')).map((element) => element.id)
  selectedIcon.value = icons.value[Math.floor(Math.random()*icons.value.length)];
  getData()
})
</script>

<template>
    <NiceView title="Home" :flexBody="true" class="f-grow">
      <template #footer>
        <NiceActions showDelete submitText="Save" :disableDelete="isDisabled" :disableCancel="isDisabled" :disableSubmit="isDisabled" deleteText="Please confirm this action" @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')">
          <NiceButton @click="toggleDisabled">Toggle disabled</NiceButton>
        </NiceActions>
      </template>
      <div class="demo">
      <!-- Nice test -->
      <NiceWrapper title="Form test" id="nice-test" collapsable :collapsed="false">
        <NiceInput title="Name" placeholder="Janez Novak" v-model="testForm.name" :disabled="isDisabled" autocomplete="name" />
        <NiceInput title="Email" placeholder="info@olaii.com" type="email" v-model="testForm.email" autocomplete="email" :disabled="isDisabled" appendText="@" />
        <NiceInput title="Price" v-model="testForm.price" textRight :disabled="isDisabled" :formatter="formatCurrency" />
        <NiceTextarea title="Comment" placeholder="This is my comment..." v-model="testForm.comment" :disabled="isDisabled" />
        <NiceDropdown v-if="show" title="List" v-model="testForm.list" :search-function="searchList" nullable :disabled="isDisabled" />
        <NiceDropdownSimple title="List simple" v-model="testForm.listSimple" keyOnly :values="list" nullable :disabled="isDisabled" />
        <NiceButton @click="randomShit" :disabled="isDisabled">Random</NiceButton>
        <pre class="mt-3">{{ testForm }}</pre>

        <!-- Popup -->
        <h5 class="mt-4">Popup</h5>
        <NicePopup :disabled="isDisabled">
          <template #trigger>
            <NiceButton type="primary" icon="icon-more-vertical" />
          </template>
          <template #content>This is the content</template>
        </NicePopup>

        <!-- Notifications -->
        <h5 class="mt-4">Notification</h5>
        <NiceButton
          type="primary"
          @click="notification('primary')"
          text="Primary"
        />

        <NiceButton type="default" @click="notification()" text="Default" />
        <NiceButton
          type="success"
          @click="notification('success')"
          text="Success"
        />
        <NiceButton type="danger" @click="notification('danger')" text="Danger" />
        <NiceButton
          type="warning"
          @click="notification('warning')"
          text="Warning"
        />
        <NiceButton type="info" @click="notification('info')" text="Info" />
        <NiceButton type="dark" @click="notification('dark')" text="Dark" />
      </NiceWrapper>

      <!-- Nice upload -->
      <NiceWrapper title="Nice upload" id="nice-upload" collapsable>
        <NiceUpload title="Nice upload" @change="onChange" v-model="form.niceUpload" :disabled="isDisabled" />
        <div v-if="form.niceUpload">
          <pre v-for="file in form.niceUpload" :key="file.name">{{ file.name }}</pre>
        </div>
      </NiceWrapper>
      
      <!-- Nice table -->
      <NiceWrapper title="Nice table and filters" id="nice-table" collapsable>
        <!-- Filters -->
        <NiceFilters
          v-model="filtersList"
          @change="filterChanged"
          :showCreateButton="true"
        >
          <NiceButton plain>Slot</NiceButton>
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
        

      <!-- Nice input -->
      <NiceWrapper title="Nice input" id="nice-input" collapsable>
        <NiceInput title="Name" v-model="form.niceInputName" :disabled="isDisabled" />
        <pre class="mb-2">
  &lt;NiceInput 
    title="Name" 
    v-model="form.niceInputName" 
  /></pre
        >

        <NiceInput title="Email" type="email" v-model="form.niceInputEmail" :disabled="isDisabled" />
        <pre>
  &lt;NiceInput 
    title="Email" 
    type="email" 
    v-model="form.niceInputEmail" 
  /></pre
        >
      </NiceWrapper>

      <!-- Nice dropdown -->
      <NiceWrapper title="Nice dropdown" id="nice-dropdown" collapsable>

        <NiceDropdown 
          title="Dropdown multiple" 
          v-model="form.niceDropdownArray" 
          :search-function="searchEvents" 
          :disabled="isDisabled" 
          :multiple="true"
          valueName="name"
        />

        <NiceDropdown 
          title="Dropdown multiple slot" 
          v-model="form.niceDropdownArray" 
          :search-function="searchEvents" 
          :disabled="isDisabled" 
          :multiple="true"
          valueName="name"
        >
          <template #selected-option="item">
            <div class="event-option">
              <div>{{ item.name }}</div>
              <small>{{ item.start_time }}</small>
            </div>
          </template>
        </NiceDropdown>

        <pre class="mb-2">
&lt;NiceDropdown 
  title="Dropdown multiple" 
  v-model="form.niceDropdownArray" 
  :search-function="searchList" 
  :disabled="isDisabled" 
  :multiple="true"
/></pre>
        <pre class="mb-2">{{ form.niceDropdownArray }}</pre>


        <NiceDropdown title="Dropdown" v-model="form.niceDropdown" :search-function="searchList" :disabled="isDisabled" />
        <pre class="mb-2">
  &lt;NiceDropdown 
    title="Dropdown" 
    v-model="form.niceDropdown" 
    :search-function="searchList 
  /></pre>
        <pre>{{ form.niceDropdown }}</pre>

        <NiceDropdownSimple title="Nice dropdown simple" v-model="form.niceDropdownSimple" :values="list" />
        <pre class="mb-2">
  &lt;NiceDropdownSimple 
    title="Native" 
    v-model="form.niceDropdown" 
    :values="list"
  /></pre>
        <pre>{{ form.niceDropdownSimple }}</pre>
      </NiceWrapper>

      <!-- Nice date -->
      <NiceWrapper title="Nice date" id="nice-date" collapsable>
        <NiceDate title="Birthday" v-model="form.niceDate" :disabled="isDisabled" />
        <pre>&lt;NiceDate title="Birthday" v-model="form.niceDate" /></pre>
        <pre>{{ form.niceDate }}</pre>
      </NiceWrapper>

      <!-- Nice checkbox -->
      <NiceWrapper title="Nice checkbox" id="nice-checkbox" collapsable>
        <NiceCheckbox title="I like pizza" v-model="form.niceCheckbox" :disabled="isDisabled" />
        <pre>&lt;NiceCheckbox title="I like pizza" v-model="form.niceCheckbox"/></pre>
      </NiceWrapper>

      <!-- Nice switch -->
      <NiceWrapper title="Nice switch" id="nice-switch" collapsable>
        <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" isInline />
        <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" />
        <NiceSwitch title="I like pizza" v-model="form.niceSwitch" :disabled="isDisabled" titleLeft />
        <pre>&lt;NiceSwitch title="I like pizza" v-model="form.niceSwitch" /></pre>
      </NiceWrapper>

      <!-- Nice checkbox -->
      <NiceWrapper title="Nice loading" id="nice-loading" collapsable>
        <NiceLoading size="mini" />
        <NiceLoading size="small" />
        <NiceLoading />
        <NiceLoading size="large" />
        <NiceLoading message="Loading..." />
        <!-- <NiceLoading message="Loading..." full-div="true" size="large" /> -->
        <pre class="mb-2">&lt;NiceLoading /></pre>
        <pre>&lt;NiceLoading message="Loading..." full-div="true" size="large" /></pre>
      </NiceWrapper>

      <!-- Nice avatar -->
      <NiceWrapper title="Nice avatar" id="nice-avatar" collapsable>
        <!-- <NiceAvatar text="KK" size="mini" />
        <NiceAvatar text="KK" size="small" />
        <NiceAvatar text="KK" size="default" />
        <NiceAvatar text="KK" size="medium" />
        <NiceAvatar text="KK" size="large" /> -->

        <div v-for="t in types" :key="t">
          <NiceAvatar :type="t" text="Nice avatar" size="mini" />
          <NiceAvatar :type="t" text="Nice avatar" size="small" />
          <NiceAvatar :type="t" text="Nice avatar" size="default" />
          <NiceAvatar :type="t" text="Nice avatar" size="medium" />
          <NiceAvatar :type="t" text="Nice avatar" size="large" />

          <NiceAvatar :type="t" gradient text="Nice avatar" size="mini" />
          <NiceAvatar :type="t" gradient text="Nice avatar" size="small" />
          <NiceAvatar :type="t" gradient text="Nice avatar" size="default" />
          <NiceAvatar :type="t" gradient text="Nice avatar" size="medium" />
          <NiceAvatar :type="t" gradient text="Nice avatar" size="large" />

          <NiceAvatar :type="t" plain text="Nice avatar" size="mini" />
          <NiceAvatar :type="t" plain text="Nice avatar" size="small" />
          <NiceAvatar :type="t" plain text="Nice avatar" size="default" />
          <NiceAvatar :type="t" plain text="Nice avatar" size="medium" />
          <NiceAvatar :type="t" plain text="Nice avatar" size="large" />

          <NiceAvatar :type="t" shape="square" text="Nice avatar" size="mini" />
          <NiceAvatar :type="t" shape="square" text="Nice avatar" size="small" />
          <NiceAvatar :type="t" shape="square" text="Nice avatar" size="default" />
          <NiceAvatar :type="t" shape="square" text="Nice avatar" size="medium" />
          <NiceAvatar :type="t" shape="square" text="Nice avatar" size="large" />

          <NiceAvatar :status="t" text="Nice avatar" size="mini" />
          <NiceAvatar :status="t" text="Nice avatar" size="small" />
          <NiceAvatar :status="t" text="Nice avatar" size="default" />
          <NiceAvatar :status="t" text="Nice avatar" size="medium" />
          <NiceAvatar :status="t" text="Nice avatar" size="large" />

          <NiceAvatar gavatar="info@olaii.com" size="mini" />
          <NiceAvatar gavatar="info@olaii.com" size="small" />
          <NiceAvatar gavatar="info@olaii.com" size="default" />
          <NiceAvatar gavatar="info@olaii.com" size="medium" />
          <NiceAvatar gavatar="info@olaii.com" size="large" />
        </div>

        <pre>&lt;NiceAvatar /></pre>
      </NiceWrapper>

      <!-- Nice modal -->
      <NiceWrapper title="Nice modal" id="nice-modal" collapsable>
        <NiceModal name="modal" title="Header">
          <template #footer>Footer</template>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>
          <div>This is a test modal</div>

        </NiceModal>
        <pre class="mb-2">&lt;NiceModal name="modal">This is a test modal&lt;/NiceModal></pre>

        <NicePanel name="panel-right" noPadding>
          <NiceView flexView title="Panel right">
            <div>
              <p>This is a right panel</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
              <p>This is a panel test</p>
            </div>

            <template #footer>
              <NiceActions @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')"></NiceActions>
            </template>
          </NiceView>
        </NicePanel>
        <NicePanel name="panel-left" position="left" noPadding>
          <NiceView flexView title="Panel left">
            <p>This is a left panel</p>
            <NiceInput title="Name" v-model="testForm.name" :disabled="isDisabled" />
            <NiceInput title="Email" type="email" v-model="testForm.email" :disabled="isDisabled" />
            <NiceTextarea title="Comment" v-model="testForm.comment" :disabled="isDisabled" />
            <NiceDropdown v-if="show" title="List" v-model="testForm.list" :search-function="searchList" nullable :disabled="isDisabled" />
            <NiceDropdownSimple title="List simple" v-model="testForm.listSimple" keyOnly :values="list" nullable :disabled="isDisabled" />
            <NiceButton @click="randomShit" :disabled="isDisabled">Random</NiceButton>
            <template #footer>
              <NiceActions @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')"></NiceActions>
            </template>
          </NiceView>
        </NicePanel>
        <NicePanel name="panel-top" position="top" noPadding>
          <NiceView flexView title="Panel top">
            <p>This is a top panel</p>
            <NiceInput title="Name" v-model="testForm.name" :disabled="isDisabled" />
            <NiceInput title="Email" type="email" v-model="testForm.email" :disabled="isDisabled" />
            <NiceTextarea title="Comment" v-model="testForm.comment" :disabled="isDisabled" />
            <NiceDropdown v-if="show" title="List" v-model="testForm.list" :search-function="searchList" nullable :disabled="isDisabled" />
            <NiceDropdownSimple title="List simple" v-model="testForm.listSimple" keyOnly :values="list" nullable :disabled="isDisabled" />
            <NiceButton @click="randomShit" :disabled="isDisabled">Random</NiceButton>
            <template #footer>
              <NiceActions @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')"></NiceActions>
            </template>
          </NiceView>
        </NicePanel>
        <NicePanel name="panel-bottom" position="bottom" noPadding>
          <NiceView flexView title="Panel bottom">
            <p>This is a bottom panel</p>
            <NiceInput title="Name" v-model="testForm.name" :disabled="isDisabled" />
            <NiceInput title="Email" type="email" v-model="testForm.email" :disabled="isDisabled" />
            <NiceTextarea title="Comment" v-model="testForm.comment" :disabled="isDisabled" />
            <NiceDropdown v-if="show" title="List" v-model="testForm.list" :search-function="searchList" nullable :disabled="isDisabled" />
            <NiceDropdownSimple title="List simple" v-model="testForm.listSimple" keyOnly :values="list" nullable :disabled="isDisabled" />
            <NiceButton @click="randomShit" :disabled="isDisabled">Random</NiceButton>
            <template #footer>
              <NiceActions @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')"></NiceActions>
            </template>
          </NiceView>
        </NicePanel>
        <pre class="mb-2">&lt;NicePanel name="panel" position="right">This is a test panel&lt;/NicePanel></pre>

        <NiceButton @click="openModal">Open modal</NiceButton>
        <NiceButton @click="openModal2">Open modal 2</NiceButton>
        <NiceButton @click="openPanelRight">Open panel right</NiceButton>
        <NiceButton @click="openPanelLeft">Open panel left</NiceButton>
        <NiceButton @click="openPanelTop">Open panel top</NiceButton>
        <NiceButton @click="openPanelBottom">Open panel bottom</NiceButton>
        <NiceButton @click="openToast('This is a test')">Open toast</NiceButton>
        <NiceButton @click="openNotification">Open notification</NiceButton>
      </NiceWrapper>

      <!-- Nice button -->
      <NiceWrapper title="Nice button" id="nice-button" collapsable>
        <div class="buttons">
          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="large">{{ t }} large</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t">{{ t }} medium</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="small">{{ t }} small</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="mini">{{ t }} mini</NiceButton>
          </div>
          
          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="large"></NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t"></NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="small"></NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" size="mini"></NiceButton>
          </div>

          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" plain size="large">
              {{ t }} large plain
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" plain>{{ t }} medium plain</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" plain size="small">
              {{ t }} small plain
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" plain size="mini">
              {{ t }} small mini
            </NiceButton>
          </div>

          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" naked size="large">
              {{ t }} large naked
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" naked>{{ t }} medium naked</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" naked size="small">
              {{ t }} small naked
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" naked size="mini">
              {{ t }} mini naked
            </NiceButton>
          </div>

          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" rounded size="large">
              {{ t }} large rounded
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" rounded>{{ t }} medium rounded</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" rounded size="small">
              {{ t }} small rounded
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" rounded size="mini">
              {{ t }} mini rounded
            </NiceButton>
          </div>

          <div class="buttons-wrap" v-for="t in types" :key="t">
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" outline size="large">
              {{ t }} large outline
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" outline>{{ t }} medium outline</NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" outline size="small">
              {{ t }} small outline
            </NiceButton>
            <NiceButton :disabled="isDisabled" :icon="selectedIcon" :type="t" outline size="mini">
              {{ t }} mini outline
            </NiceButton>
          </div>
        </div>
      </NiceWrapper>

      <!-- Nice icon -->
      <NiceWrapper title="Nice icon" id="nice-icon" collapsable>
        <div class="text-center">
          <NiceIcon :icon="selectedIcon" />
          <pre class="mb-4">&lt;NiceIcon icon="{{ selectedIcon }}" /></pre>
        </div>

        <div class="icons">
          <NiceButton
            :icon="icon"
            type="dark"
            plain
            :class="{ active: selectedIcon == icon }"
            v-for="icon in icons"
            :key="icon"
            @click="selectedIcon = icon"
          />
        </div>
      </NiceWrapper>

      <!-- Nice no data -->
      <NiceWrapper title="Nice no data" id="nice-no-data" collapsable>
        <NiceNoData />
        <NiceNoData message="This is a test" icon="icon-wind" />
      </NiceWrapper>
      <!-- <pre>{{  form  }}</pre> -->
    </div>

    </NiceView>
</template>