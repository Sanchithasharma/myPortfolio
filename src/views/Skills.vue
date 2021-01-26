<template>
  <div class="skills">
    <div class="progress-bars">
      <el-card class="box-card">
        <div class="card-header">
          <h1>Skills</h1>
        </div>
        <el-divider></el-divider>

        <h3>JavaScript</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="85"
        ></el-progress>

        <h3>HTML</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="37"
        ></el-progress>

        <h3>Angular</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="68"
        ></el-progress>

        <h3>Vue</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="63"
        ></el-progress>

        <h3>Node.js</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="30"
        ></el-progress>

        <h3>SASS</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="50"
        ></el-progress>

        <h3>Mongo DB</h3>
        <el-progress
          :stroke-width="progressBarCardWidth"
          :color="customColor"
          :show-text="false"
          :percentage="30"
        ></el-progress>
      </el-card>

      <el-card class="box-card">
        <div class="card-header">
          <h1>Experience</h1>
        </div>
        <el-divider></el-divider>

        <div class="block">
          <el-timeline>
            <el-timeline-item
              timestamp="June 2020 - Present"
              placement="top"
              :color="customColor"
              icon="el-icon-loading"
            >
              <el-card>
                <h3>Senior Software Engineer</h3>
                <p>Robosoft Technologies</p>
              </el-card>
            </el-timeline-item>

            <el-timeline-item
              timestamp="December 2016 - June 2020"
              placement="top"
              :color="customColor"
              icon="el-icon-loading"
            >
              <el-card>
                <h3>System Engineer Trainee</h3>
                <p>Tata Consultancy Services</p>
              </el-card>
            </el-timeline-item>

            <el-timeline-item
              timestamp="2012 - 2016"
              placement="top"
              :color="customColor"
              icon="el-icon-loading"
            >
              <el-card>
                <h3>
                  Bachelor Of Engineering in Electronics and Communication
                </h3>
                <p>Jawaharlal Nehru College Of Engineering, Shimoga</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
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
    };
  },
});
</script>

<style scoped>
.skills {
  color: #606266;
}

.el-timeline-item__timestamp {
  font-size: 16px;
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
</style>
