<!--
 * @Author: 24min
 * @Date: 2021-07-07 19:46:05
 * @LastEditors: 24min
 * @LastEditTime: 2021-07-07 21:17:52
 * @FilePath: \el-image\src\views\Home.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div class="home">
    <div class="image-box" v-for="num in 6" :key="num">
      <el-image :src="require(`../assets/yileina${num}.jpeg`)" lazy>
        <div slot="placeholder" class="image-slot">
          <em class="el-icon-loading"></em>加载图片伊蕾娜{{ num }}中...
        </div></el-image
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const camelCase = function (name) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, "Moz$1");
};
const getStyle = function (element, styleName) {
  // if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, "");
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
const isScroll = (el, vertical) => {
  const determinedDirection = vertical !== null && vertical !== undefined;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, "overflow-y")
      : getStyle(el, "overflow-x")
    : getStyle(el, "overflow");

  return overflow.match(/(scroll|auto)/);
};
const getScrollContainer = (el, vertical) => {
  // if (isServer) return;
  debugger;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};
const isInContainer = (el, container) => {
  // if (isServer || !el || !container) return false;
  debugger;
  const elRect = el.getBoundingClientRect();
  let containerRect;

  if (
    [window, document, document.documentElement, null, undefined].includes(
      container
    )
  ) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  if (elRect.top < containerRect.bottom) {
    console.log("elRect.top < containerRect.bottom======true=====>");
  } else {
    console.log("elRect.top < containerRect.bottom======false=====>");
  }
  if (elRect.bottom > containerRect.top) {
    console.log("elRect.bottom > containerRect.top======true=====>");
  } else {
    console.log("elRect.bottom > containerRect.top======false=====>");
  }
  if (elRect.right > containerRect.left) {
    console.log("elRect.right > containerRect.left======true=====>");
  } else {
    console.log("elRect.right > containerRect.left======false=====>");
  }
  if (elRect.left < containerRect.right) {
    console.log("elRect.left < containerRect.right======true=====>");
  } else {
    console.log("elRect.left < containerRect.right======false=====>");
  }
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    // console.log('elImage',this.$refs.image1)
    // console.log('elImage',getScrollContainer(this.$refs.image1.$el))
  },
};
</script>
<style>
/* body {
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background: lightcyan;
} */
body{
  overflow:hidden;
}
.home {
  overflow:auto;
  overflow-x:hidden;
  width: 100vw;
  height: 100vh;
  background: lightcyan;
}
.image-box {
  width: 300px;
  height: 400px;
  /* margin: 0 auto; */
  padding: 40px;
}
</style>
