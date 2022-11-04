<template>
  <div class="skills">
    <div class="progress-bars">
      <el-card class="box-card">
        <div class="card-header">
          <h1>Skills</h1>
        </div>
        <el-divider></el-divider>
        <div v-for="item in skills" :key="skills.indexOf(item)">
          <h3>{{item}}</h3>
          <el-progress
            :stroke-width="progressBarCardWidth"
            :color="customColor"
            :show-text="false"
            :percentage="85"
          ></el-progress>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      customColor: "#303133",
      content: "Custom icon",
      progressBarCardWidth: 5,
      customIcon: "el-icon-loading",
      skills: [
        "JavaScript",
        "HTML 5",
        "CSS 3",
        "Angular",
        "Vue",
        "Node.js",
        "SASS",
        "Mango DB",
        "GIT",
      ],
    };
  },
});
</script>

<style scoped>
.skills {
  color: #606266;
}

h1 {
  margin: 0%;
}

.progress-bars {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.el-card {
  width: 50%;
  margin: 1%;
}

@media only screen and (max-width: 1000px) {
  .progress-bars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .el-card {
    width: 100%;
    margin: 1%;
  }
}
</style>
