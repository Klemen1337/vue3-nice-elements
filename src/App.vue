<script setup>
import { onMounted, ref, inject } from 'vue'
const nice = inject('nice')
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

async function getFromList(id) {
  return list.find((s) =>
    s.id == id
  );
}

const types = ['primary', 'default', 'success', 'warning', 'danger', 'info', 'dark', 'white']
const selectedIcon = ref('icon-check')
const loading = ref(false)
const show = ref(false)
setTimeout(() => {
  show.value = true
}, 500)
const icons = ref([])
const testForm = ref({
  name: "",
  email: "",
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
  niceSwitch: false
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
  // {
  //   icon: "icon-arrow-right",
  //   to: (row) => ({
  //     name: "app.projects",
  //     params: { projectId: row.id },
  //   }),
  // },
]
const columns = [
  {
    name: "Site",
    key: "news_site",
  },
  {
    name: "Title",
    key: "title",
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

function openModal() {
  nice.modal('modal', true)
}

function openPanel() {
  nice.panel('panel', true)
}

function openToast(text) {
  nice.toast(text ? text : 'This is a test')
}

function openNotification() {
  nice.notification('This is a test')
}

onMounted(() => {
  icons.value = Array.from(document.getElementsByTagName('symbol')).map((element) => element.id)
  selectedIcon.value = icons.value[Math.floor(Math.random()*icons.value.length)];
  getData()
})
</script>

<template>
  <NiceView :flexBody="true" title="Vue3 - Nice elements v0.1.6">
    <template #footer>
      <NiceActions showDelete submitText="Save" deleteText="Please confirm this action" @cancel="openToast('cancel')" @submit="openToast('submit')" @delete="openToast('delete')"></NiceActions>
    </template>
    <div class="demo">
    <!-- <div class="split">
      <div class="left-side">
        <div class="navigation">
          <NiceButton>Home</NiceButton>
          <NiceButton>Nice table</NiceButton>
          <NiceButton>Nice filters</NiceButton>
          <router-link to="/">Go to Home</router-link>
          <router-link to="/about">Go to About</router-link>
        </div>
      </div>
      <div class="right-side">
        <router-view></router-view>
      </div>
    </div> -->

    <!-- Nice upload -->
    <NiceWrapper title="Nice upload" id="nice-upload" collapsable>
      <NiceUpload title="Nice upload" @change="onChange" v-model="form.niceUpload" />
      <div v-if="form.niceUpload">
        <pre v-for="file in form.niceUpload" :key="file.name">{{ file.name }}</pre>
      </div>
    </NiceWrapper>

    <!-- Nice table -->
    <NiceWrapper title="Form test" id="nice-test" collapsable collapsed>
      <NiceInput title="Name" v-model="testForm.name" />
      <NiceInput title="Email" type="email" v-model="testForm.email" />
      <NiceDropdown v-if="show" title="List" v-model="testForm.list" :search-function="searchList" nullable />
      <NiceDropdownSimple title="List simple" v-model="testForm.listSimple" keyOnly :values="list" nullable />
      <NiceButton @click="randomShit">Random</NiceButton>
      <pre>{{ testForm }}</pre>
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
      <NiceInput title="Name" v-model="form.niceInputName" />
      <pre class="mb-2">
&lt;NiceInput 
  title="Name" 
  v-model="form.niceInputName" 
/></pre
      >

      <NiceInput title="Email" type="email" v-model="form.niceInputEmail" />
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
      <NiceDropdown title="Dropdown" v-model="form.niceDropdown" :search-function="searchList" />
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
      <NiceDate title="Birthday" v-model="form.niceDate" />
      <pre>&lt;NiceDate title="Birthday" v-model="form.niceDate" /></pre>
    </NiceWrapper>

    <!-- Nice checkbox -->
    <NiceWrapper title="Nice checkbox" id="nice-checkbox" collapsable>
      <NiceCheckbox title="I like pizza" v-model="form.niceCheckbox" />
      <pre>&lt;NiceCheckbox title="I like pizza" v-model="form.niceCheckbox"/></pre>
    </NiceWrapper>

    <!-- Nice switch -->
    <NiceWrapper title="Nice switch" id="nice-switch" collapsable>
      <NiceSwitch title="I like pizza" v-model="form.niceSwitch" />
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
      <NiceAvatar text="KK" size="mini" />
      <NiceAvatar text="KK" size="small" />
      <NiceAvatar text="KK" size="default" />
      <NiceAvatar text="KK" size="medium" />
      <NiceAvatar text="KK" size="large" />

      <!-- <div v-for="t in types" :key="t">
        <NiceAvatar :type="t" text="KK" size="mini" />
        <NiceAvatar :type="t" text="KK" size="small" />
        <NiceAvatar :type="t" text="KK" size="default" />
        <NiceAvatar :type="t" text="KK" size="medium" />
        <NiceAvatar :type="t" text="KK" size="large" />

        <NiceAvatar :type="t" gradient text="KK" size="mini" />
        <NiceAvatar :type="t" gradient text="KK" size="small" />
        <NiceAvatar :type="t" gradient text="KK" size="default" />
        <NiceAvatar :type="t" gradient text="KK" size="medium" />
        <NiceAvatar :type="t" gradient text="KK" size="large" />

        <NiceAvatar :type="t" plain text="KK" size="mini" />
        <NiceAvatar :type="t" plain text="KK" size="small" />
        <NiceAvatar :type="t" plain text="KK" size="default" />
        <NiceAvatar :type="t" plain text="KK" size="medium" />
        <NiceAvatar :type="t" plain text="KK" size="large" />

        <NiceAvatar :type="t" shape="square" text="KK" size="mini" />
        <NiceAvatar :type="t" shape="square" text="KK" size="small" />
        <NiceAvatar :type="t" shape="square" text="KK" size="default" />
        <NiceAvatar :type="t" shape="square" text="KK" size="medium" />
        <NiceAvatar :type="t" shape="square" text="KK" size="large" />

        <NiceAvatar :status="t" text="KK" size="mini" />
        <NiceAvatar :status="t" text="KK" size="small" />
        <NiceAvatar :status="t" text="KK" size="default" />
        <NiceAvatar :status="t" text="KK" size="medium" />
        <NiceAvatar :status="t" text="KK" size="large" />
      </div> -->

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

      <NicePanel name="panel">This is a test panel</NicePanel>
      <pre class="mb-2">&lt;NicePanel name="panel">This is a test panel&lt;/NicePanel></pre>

      <NiceButton @click="openModal">Open modal</NiceButton>
      <NiceButton @click="openPanel">Open panel</NiceButton>
      <NiceButton @click="openToast">Open toast</NiceButton>
      <NiceButton @click="openNotification">Open notification</NiceButton>
    </NiceWrapper>

    <!-- Nice button -->
    <NiceWrapper title="Nice button" id="nice-button" collapsable>
      <div class="buttons">
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" size="large">{{ t }} large</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t">{{ t }} medium</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" size="small">{{ t }} small</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" size="mini">{{ t }} mini</NiceButton>
        </div>
        
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" size="large"></NiceButton>
          <NiceButton :icon="selectedIcon" :type="t"></NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" size="small"></NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" size="mini"></NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" plain size="large">
            {{ t }} large plain
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" plain>{{ t }} medium plain</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" plain size="small">
            {{ t }} small plain
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" plain size="mini">
            {{ t }} small mini
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" naked size="large">
            {{ t }} large naked
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" naked>{{ t }} medium naked</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" naked size="small">
            {{ t }} small naked
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" naked size="mini">
            {{ t }} mini naked
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" rounded size="large">
            {{ t }} large rounded
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" rounded>{{ t }} medium rounded</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" rounded size="small">
            {{ t }} small rounded
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" rounded size="mini">
            {{ t }} mini rounded
          </NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton :icon="selectedIcon" :type="t" outline size="large">
            {{ t }} large outline
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" outline>{{ t }} medium outline</NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" outline size="small">
            {{ t }} small outline
          </NiceButton>
          <NiceButton :icon="selectedIcon" :type="t" outline size="mini">
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

    <!-- <pre>{{  form  }}</pre> -->
    </div>
  </NiceView>

  <NiceSvgs />
  <NiceToast />
  <NiceNotifications />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  --nice-font-color: #173c61;
  --nice-background-color: #f5f5f9;
  --nice-border-radius: 5px;
  --nice-border-radius-large: 10px;
  --nice-border-color: #e4e7ea;
  --nice-card-bg: #fff;
  --nice-hover-color: #f5f5f9;
  --nice-input-bg: #ffffff;

  --nice-primary-font: white;
  --nice-primary-color: #696cff;
  --nice-primary-color-darker: #595bda;
  --nice-primary-color-lighter: #f1f5ff;
  --nice-primary-color-shadow: #cccdff;

  --nice-secondary-font: white;
  --nice-secondary-color: #8592a3;
  --nice-secondary-color-darker: #748296;
  --nice-secondary-color-lighter: #ebedf0;
  --nice-secondary-color-shadow: #d6dae0;

  --nice-default-font: var(--nice-secondary-font);
  --nice-default-color: var(--nice-secondary-color);
  --nice-default-color-darker: var(--nice-secondary-color-darker);
  --nice-default-color-lighter: var(--nice-secondary-color-lighter);
  --nice-default-color-shadow: var(--nice-secondary-color-shadow);

  --nice-success-font: white;
  --nice-success-color: #71dd37;
  --nice-success-color-darker: #61d424;
  --nice-success-color-lighter: #e9f9e0;
  --nice-success-color-shadow: #cff3bc;

  --nice-danger-font: white;
  --nice-danger-color: #f33d1e;
  --nice-danger-color-darker: #e92c0c;
  --nice-danger-color-lighter: #fce0dc;
  --nice-danger-color-shadow: #f9beb2;

  --nice-warning-font: white;
  --nice-warning-color: #f6ab02;
  --nice-warning-color-darker: #dd9901;
  --nice-warning-color-lighter: #fcf1d6;
  --nice-warning-color-shadow: #fae2a8;

  --nice-info-font: white;
  --nice-info-color: #4cc4ec;
  --nice-info-color-darker: #2fbae9;
  --nice-info-color-lighter: #d7f5fc;
  --nice-info-color-shadow: #a9ebf8;

  --nice-dark-font: white;
  --nice-dark-color: #233446;
  --nice-dark-color-darker: #1f2e3f;
  --nice-dark-color-lighter: #e2e4e8;
  --nice-dark-color-shadow: #dfe3e7;

  --nice-white-font: var(--nice-font-color);
  --nice-white-color: white;
  --nice-white-color-darker: white;
  --nice-white-color-lighter: white;
  --nice-white-color-shadow: #dfe3e7;
}

.dark {
  --nice-font-color: white;
  --nice-background-color: #232333;
  --nice-border-color: #3b3d56;
  --nice-card-bg: #2b2c40;
  --nice-hover-color: #252537;
  --nice-input-bg: #2b2c40;

  --nice-primary-color-lighter: #2a2a4d;
  --nice-secondary-color-lighter: #2e303f;
  --nice-default-color-lighter: #2e303f;
  --nice-success-color-lighter: #2b3c2d;
  --nice-danger-color-lighter: #422329;
  --nice-warning-color-lighter: #423424;
  --nice-info-color-lighter: #19384a;
  --nice-dark-color-lighter: #2a2a3d;
}

html,
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: var(--nice-font-color);
  background: var(--nice-background-color);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.demo {
  width: 800px;
  max-width: 100%;
  // margin: 0 auto;
  // margin-top: 2rem;

  .split {
    display: flex;

    .left-side {
      width: 200px;
      flex-shrink: 0;
      padding: 2rem;
      padding-right: 0;

      .navigation {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .btn + .btn {
          margin-left: 0;
        }
      }
    }

    .right-side {
      flex-grow: 1;
      padding: 2rem;
    }
  }

  .text-center {
    text-align: center;

    pre {
      margin: 0 auto;
    }
  }

  pre {
    background: var(--nice-background-color);
    border-radius: var(--nice-border-radius);
    border: 1px solid var(--nice-border-color);
    padding: 0.8rem;
    font-size: 0.8em;
    margin: 0;
    width: fit-content;
  }

  h1 {
    text-align: center;
    font-size: 3em;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 0.5rem;
  }

  .buttons {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;

    .btn + .btn {
      margin-left: 0;
    }

    .buttons-wrap {
      display: flex;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
  }
}
</style>