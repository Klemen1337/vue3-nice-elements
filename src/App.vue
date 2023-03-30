<script setup>
import { onMounted, ref } from "vue";

// import { NiceIcon } from "./components"
import NiceIcon from "./components/NiceIcon.vue";
import NiceSvgs from "./components/NiceSvgs.vue";

const list = [
  { id: 1, value: "List 1" },
  { id: 2, value: "List 2" },
  { id: 3, value: "List 3" },
  { id: 4, value: "List 4" },
  { id: 5, value: "List 5" },
]
async function searchList() {
  return list
}

const types = ["primary", "default", "success", "warning", "danger", "info", "dark",
  "white"]
const selectedIcon = ref("icon-check");
let icons = ref([]);
const form = ref({
  niceInputName: "",
  niceInputEmail: "",
  niceDropdown: null,
  niceDropdownSimple: null
})

onMounted(() => {
  icons.value = Array.from(document.getElementsByTagName("symbol")).map(element => {
    return element.id
  })
})
</script>

<template>
  <div class="demo">
    <h1>Nice elements - Vue3</h1>

    <!-- Nice input -->
    <NiceWrapper title="Nice input" id="nice-input">
      <NiceInput title="Name" v-model="form.niceInputName" />
      <pre>&lt;NiceInput 
  title="Name" 
  v-model="form.niceInputName" 
/></pre>

      <NiceInput title="Email" type="email" v-model="form.niceInputEmail" />
      <pre>&lt;NiceInput 
  title="Email" 
  type="email" 
  v-model="form.niceInputEmail" 
/></pre>
    </NiceWrapper>


    <!-- Nice dropdown -->
    <NiceWrapper title="Nice dropdown" id="nice-dropdown">
      <NiceDropdown title="Dropdown" v-model="form.niceDropdown" :search-function="searchList" />
      <pre>&lt;NiceDropdown 
  title="Dropdown" 
  v-model="form.niceDropdown" 
  :search-function="searchList 
/></pre>

      <NiceDropdownSimple title="Native" v-model="form.niceDropdownSimple" :values="list" />
      <pre>&lt;NiceDropdownSimple 
  title="Native" 
  v-model="form.niceDropdown" 
  :values="list"
/></pre>
    </NiceWrapper>


    <!-- Nice button -->
    <NiceWrapper title="Nice button" id="nice-button" collapsable>
      <div class="buttons">
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton icon="icon-circle" :type="t" size="large">{{ t }} large</NiceButton>
          <NiceButton icon="icon-circle" :type="t" >{{ t }} medium</NiceButton>
          <NiceButton icon="icon-circle" :type="t" size="small">{{ t }} small</NiceButton>
        </div>
  
        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton icon="icon-circle" :type="t" plain size="large">{{ t }} large plain</NiceButton>
          <NiceButton icon="icon-circle" :type="t" plain >{{ t }} medium plain</NiceButton>
          <NiceButton icon="icon-circle" :type="t" plain size="small">{{ t }} small plain</NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton icon="icon-circle" :type="t" naked size="large">{{ t }} large naked</NiceButton>
          <NiceButton icon="icon-circle" :type="t" naked >{{ t }} medium naked</NiceButton>
          <NiceButton icon="icon-circle" :type="t" naked size="small">{{ t }} small naked</NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton icon="icon-circle" :type="t" rounded size="large">{{ t }} large rounded</NiceButton>
          <NiceButton icon="icon-circle" :type="t" rounded>{{ t }} medium rounded</NiceButton>
          <NiceButton icon="icon-circle" :type="t" rounded size="small">{{ t }} small rounded</NiceButton>
        </div>

        <div class="buttons-wrap" v-for="t in types" :key="t">
          <NiceButton icon="icon-circle" :type="t" outline size="large">{{ t }} large outline</NiceButton>
          <NiceButton icon="icon-circle" :type="t" outline>{{ t }} medium outline</NiceButton>
          <NiceButton icon="icon-circle" :type="t" outline size="small">{{ t }} small outline</NiceButton>
        </div>
      </div>
    </NiceWrapper>


    <!-- Nice icon -->
    <NiceWrapper title="Nice icon" id="nice-icon" collapsable>
      <NiceIcon :icon="selectedIcon" />
      <pre>&lt;NiceIcon icon="{{  selectedIcon  }}" /></pre>

      <div class="icons">
        <NiceButton :icon="icon" size="small" type="primary" plain :class="{'active': selectedIcon == icon }" v-for="icon in icons" :key="icon" @click="selectedIcon = icon" />
      </div>
    </NiceWrapper>
  
    <!-- <pre>{{  form  }}</pre> -->
  </div>

  <NiceSvgs />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  --font-color: #173c61;
  --background-color: #f5f5f9;
  --border-radius: 5px;
  --border-radius-large: 10px;
  --border-color: #e4e7ea;
  --card-bg: #fff;
  --hover-color: #f5f5f9;
  --input-bg: #ffffff;

  --primary-font: white;
  --primary-color: #696cff;
  --primary-color-darker: #595bda;
  --primary-color-lighter: #f1f5ff;
  --primary-color-shadow: #cccdff;

  --secondary-font: white;
  --secondary-color: #8592a3;
  --secondary-color-darker: #748296;
  --secondary-color-lighter: #ebedf0;
  --secondary-color-shadow: #d6dae0;

  --default-font: var(--secondary-font);
  --default-color: var(--secondary-color);
  --default-color-darker: var(--secondary-color-darker);
  --default-color-lighter: var(--secondary-color-lighter);
  --default-color-shadow: var(--secondary-color-shadow);

  --success-font: white;
  --success-color: #71dd37;
  --success-color-darker: #61d424;
  --success-color-lighter: #e9f9e0;
  --success-color-shadow: #cff3bc;

  --danger-font: white;
  --danger-color: #f33d1e;
  --danger-color-darker: #e92c0c;
  --danger-color-lighter: #fce0dc;
  --danger-color-shadow: #f9beb2;

  --warning-font: white;
  --warning-color: #f6ab02;
  --warning-color-darker: #dd9901;
  --warning-color-lighter: #fcf1d6;
  --warning-color-shadow: #fae2a8;

  --info-font: white;
  --info-color: #4cc4ec;
  --info-color-darker: #2fbae9;
  --info-color-lighter: #d7f5fc;
  --info-color-shadow: #a9ebf8;

  --dark-font: white;
  --dark-color: #233446;
  --dark-color-darker: #1f2e3f;
  --dark-color-lighter: #e2e4e8;
  --dark-color-shadow: #dfe3e7;

  --white-font: var(--font-color);
  --white-color: white;
  --white-color-darker: white;
  --white-color-lighter: white;
  --white-color-shadow: #dfe3e7;
}

.dark {
  --font-color: white;
  --background-color: #232333;
  --border-color: #3b3d56;
  --card-bg: #2b2c40;
  --hover-color: #252537;
  --input-bg: #2b2c40;

  --primary-color-lighter: #2a2a4d;
  --secondary-color-lighter: #2e303f;
  --default-color-lighter: #2e303f;
  --success-color-lighter: #2b3c2d;
  --danger-color-lighter: #422329;
  --warning-color-lighter: #423424;
  --info-color-lighter: #19384a;
  --dark-color-lighter: #2a2a3d;
}


html,
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: var(--font-color);
  background: var(--background-color);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

.demo {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 2rem;

  pre {
    background: var(--background-color);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0.8rem;
    font-size: 0.8em;
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

  .btn + .btn {
    margin-left: 0;
  }

  .buttons {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;

    .buttons-wrap {
      display: flex;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
  }
}
</style>