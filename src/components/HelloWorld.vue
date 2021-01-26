<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <router-link to="/">
        <el-menu-item index="1">Hello</el-menu-item>
      </router-link>

      <router-link to="/skills">
        <el-menu-item index="1">Work</el-menu-item>
      </router-link>

      <router-link to="/blog">
        <el-menu-item index="1">Blog</el-menu-item>
      </router-link>

      <router-link to="/Contact">
        <el-menu-item index="1">Contact</el-menu-item>
      </router-link>

      <router-link to="/miscellaneous">
        <el-menu-item index="1">Miscellaneous</el-menu-item>
      </router-link>
    </el-menu>

    <div class="animationIcons">
      <img
        class="diamond-icon"
        src="../assets/animationIcons/diamond.png"
        height="40px"
        width="40px"
      />

      <img
        class="frame-icon"
        src="../assets/animationIcons/frame.png"
        height="40px"
        width="40px"
      />

      <img
        class="music-icon"
        src="../assets/animationIcons/music.png"
        height="40px"
        width="40px"
      />

      <img
        class="download-icon"
        src="../assets/animationIcons/download.png"
        height="40px"
        width="40px"
      />
    </div>

    <div class="animationIcons-right">
      <img
        class="diamond-icon"
        src="../assets/animationIcons/diamond.png"
        height="40px"
        width="40px"
      />

      <img
        class="frame-icon"
        src="../assets/animationIcons/frame.png"
        height="40px"
        width="40px"
      />

      <img
        class="music-icon"
        src="../assets/animationIcons/music.png"
        height="40px"
        width="40px"
      />

      <img
        class="download-icon"
        src="../assets/animationIcons/download.png"
        height="40px"
        width="40px"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";

.el-menu {
  display: flex;
  justify-content: center;
  font-size: larger;

  .el-menu-item {
    font-size: larger;
    color: $primary-grey;
  }

  a {
    text-decoration: none;
    :hover {
      background: #dcdfe6;
    }
  }
}

.animationIcons {
  margin-right: 70%;
  z-index: -50;
}

.diamond-icon {
  animation-name: slide;
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  z-index: -100;
}

.frame-icon {
  animation-name: slide;
  animation-duration: 6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  z-index: -100;
}

.download-icon {
  animation-name: slide;
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  animation: slide 10s ease-in-out both infinite;
  z-index: -100;
}

.music-icon {
  z-index: -100;
  animation: slide 8s ease-out both infinite;
}

.animationIcons-right {
  margin-left: 80%;
  margin-top: -5%;
}

@keyframes slide {
  from {
    transform: translateY(-70px);
  }
  to {
    transform: translateY(550px);
  }
}
</style>