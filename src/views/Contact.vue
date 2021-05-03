<template>
  <div class="about">
    <el-card>
      <h4>
        <center>Get in touch!</center>
        <br />
        <center>
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, I'd love to hear from you. Simply send an email or
          ping me.
        </center>
        <br />
        <center class="email">
          EMIAL -
          <span style="color: #e6a23c; text-decoration: underline"
            >sanchitha.s.r@gmail.com
          </span>
          <br />
          LIVES IN: <span style="color: #e6a23c">Bengaluru, INDIA </span>
        </center>
      </h4>
      <el-row class="intro-icon-rows">
        <!-- Linkedin -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://www.linkedin.com/in/sanchitha-sharma-r/',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </el-button>

        <!-- E-mail -->
        <el-button
          class="icon-buttons"
          onClick="window.open('mailto: sanchitha.s.r@gmail.com',  '_blank')"
          type="info"
          circle
        >
          <i class="fas fa-envelope fa-2x"></i>
        </el-button>

        <!-- Twitter -->
        <el-button
          class="icon-buttons"
          onClick="window.open('https://twitter.com/SrSanchitha',  '_blank')"
          type="info"
          circle
        >
          <i class="fab fa-twitter fa-2x"></i>
        </el-button>
      </el-row>

      <el-row class="resume-button">
        <el-tooltip
          class="item"
          effect="dark"
          content="DOWNLOAD RESUME"
          placement="bottom"
        >
          <el-button
            class="resume"
            onClick="window.open('https://drive.google.com/file/d/1F2Re4qY65GNjR_cez4lyQxeUUvcrZOdk/view?usp=drivesdk',  '_blank')"
          >
            <i class="fas fa-download fa-5x"></i>
          </el-button>
        </el-tooltip>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

h4 {
  font-size: 30px;
}
.el-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.resume-button {
  margin: 2%;
}

.resume {
  border: none;
}

.email {
  font-family: monospace;
  font-size: 22px;
}

.intro-icon-rows {
  .icon-buttons {
    background-color: #303133;
  }

  :hover {
    background: #ebeef5;
    color: black;
  }
}

.el-card {
  margin: 2%;
}
</style>
