<template>
  <div class="intro">
    <div class="intro-avatar">
      <el-avatar
        onClick="window.open('https://drive.google.com/file/d/1F2Re4qY65GNjR_cez4lyQxeUUvcrZOdk/view?usp=drivesdk',  '_blank')"
        :size="150"
      >
        <img src="../assets/profile.jpg" />
      </el-avatar>

      <center class="my-name">Sanchitha SR</center>

      <center>
        Hello! <br />
        I'm a Web Developer specialized in developing <br />
        responsive websites and web applications. I have 4+ years of experience.
      </center>
    </div>

    <div class="box-card">
      <!-- Introduction icons -->
      <el-row class="intro-icon-rows">
        <!-- Dev Community -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://dev.to/sanchithasr',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-dev fa-2x"></i>
        </el-button>

        <!-- GitHub -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://github.com/Sanchithasharma',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-github fa-2x"></i>
        </el-button>

        <!-- Medium  -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://sanchithasr.medium.com/',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-medium fa-2x"></i>
        </el-button>

        <!-- Spotify -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://open.spotify.com/user/aoz4q9bn634scmg6qjsaw21gs?si=hteB3jSVT4CRlwEK-UauaQ',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-spotify fa-2x"></i>
        </el-button>

        <!-- goodreads -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://www.goodreads.com/user/show/64250373-sanchitha-sr',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-goodreads fa-2x"></i>
        </el-button>
      </el-row>

      <!-- Resume Button -->
      <br />

      <!-- <el-row class="resume-button">
        <el-button
          class="resume"
          onClick="window.open('https://drive.google.com/file/d/1sUsupiFAqWw5bTl8UzntpPzGMNOj7xLy/view?usp=drivesdk',  '_blank')"
        >
          <i class="fas fa-download fa-3x"></i>
        </el-button>
      </el-row> -->
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
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dynalight&family=Lovers+Quarrel&display=swap");

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;

  center {
    font-size: 25px;
  }
  .intro-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;

    .my-name {
      font-family: "Lovers Quarrel", Helvetica, Arial;
      font-size: 100px;
    }
  }

  .el-avatar {
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .intro-icon-rows {
    display: flex;
    align-content: center;
    justify-content: center;

    .icon-buttons {
      background: #303133;
    }

    :hover {
      background: #ebeef5;
      color: black;
    }
  }

  .resume-button {
    display: flex;
    align-content: center;
    justify-content: center;

    .resume {
      border: none;
    }
  }
  .box-card {
    margin-top: 2%;
  }
}
</style>
