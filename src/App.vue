<script setup>
import routes from "./components-list"
</script>

<template>
  <aside>
    <div class="top-bar">
      <h1 class="m-0">Vue3 - Nice elements</h1>
      <h3 class="m-0">v0.2.5</h3>
    </div>

    <div class="links">
      <RouterLink 
        class="link" 
        :to="route.path" 
        v-for="route in routes" 
        :key="route.name"
      >
        {{ route.title }}
      </RouterLink>

      <!--
      <a href="#nice-test" class="link">Form test</a>
      <a href="#nice-upload" class="link">Nice upload</a>
      <a href="#nice-table" class="link">Nice table and filters</a>
      <a href="#nice-input" class="link">Nice input</a>
      <a href="#nice-dropdown" class="link">Nice dropdown</a>
      <a href="#nice-date" class="link">Nice date</a>
      <a href="#nice-checkbox" class="link">Nice checkbox</a>
      <a href="#nice-switch" class="link">Nice switch</a>
      <a href="#nice-loading" class="link">Nice loading</a>
      <a href="#nice-avatar" class="link">Nice avatar</a>
      <a href="#nice-modal" class="link">Nice modal</a>
      <a href="#nice-button" class="link">Nice button</a>
      <a href="#nice-icon" class="link">Nice icon</a>
      <a href="#nice-no-data" class="link">Nice no data</a>
      -->
    </div>
  </aside>

  <main class="demo">
    <RouterView />
  </main>

  <NiceSvgs :is-development="false">
    <!-- Custom icons go here -->
    <symbol id="icon-hard-drive-2" viewBox="0 0 20 20">
      <path d="M2 2c0-1.1 0.9-2 2-2h12c1.105 0 2 0.895 2 2v0 16c0 1.105-0.895 2-2 2v0h-12c-1.105 0-2-0.895-2-2v0-16zM12.4 7.6c-0.693-0.386-1.52-0.614-2.4-0.614-2.761 0-5 2.239-5 5s2.239 5 5 5c2.757 0 4.992-2.231 5-4.986v-7.001l-2.6 2.6zM10 14c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM6 3v2h4v-2h-4zM4 3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM4 19c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM16 19c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM16 3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z"></path>
    </symbol>
  </NiceSvgs>
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

.event-option {
  display: flex;
  flex-direction: column;
}

.w-0 {
  width: 0;
}

.text-right {
  text-align: right !important;
}

.text-italic {
  font-style: italic;
}

.text-small {
  font-size: 0.8em;
}

.table-image {
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 3px;
}

.demo {
  max-width: 100%;
  flex-grow: 1;
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

#app {
  display: flex;
  height: 100dvh;
  width: 100%;
}

aside {
  position: sticky;
  top: 0;
  width: 300px;
  flex-shrink: 0;
  height: 100vh;
  background: var(--nice-card-bg);
  border-right: 1px solid var(--nice-border-color);
  display: flex;
  flex-direction: column;

  .top-bar {
    background: var(--nice-primary-color);
    color: white;
    padding: 1.5rem;
    flex-shrink: 0;

    h3 {
      font-size: 0.8em;
    }
  }

  .links {
    flex-grow: 1;
    overflow: auto;
    padding: 1rem;

    .link {
      display: block;
      padding: 0.8rem;
      margin-bottom: 0.5rem;
      text-decoration: none;
      color: var(--nice-font-color);
      border-radius: var(--nice-border-radius);
      background: var(--nice-card-bg);

      &.router-link-exact-active, &:hover {
        color: white;
        background: var(--nice-primary-color);
      }
    }
  }
}
</style>