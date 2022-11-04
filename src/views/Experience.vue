<template>
  <div id="experience">
    <el-card class="box-card">
      <div class="card-header">
        <h1>Experience</h1>
      </div>
      <el-divider></el-divider>

      <div class="block">
        <el-timeline>
          <el-timeline-item
            timestamp="June 2022 - Present"
            placement="top"
            :color="customColor"
            icon="el-icon-loading"
          >
            <el-card>
              <h3>Senior Consultant</h3>
              <p>Capgemini, Australia</p>
            </el-card>
          </el-timeline-item>

          <el-timeline-item
            timestamp="June 2020 - June 2022"
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
</template>

<script>
export default {
  data() {
    return {
      customColor: "#303133",
      content: "Custom icon",
      experience: [
        {
            timestamp: "June 2022 - Present",
            organization: "Senior Consultant",
            role: "Capgemini, Australia"
        },
        {
            timestamp: "June 2020 - June 2022",
            organization: "Robosoft Technologies",
            role: "Senior Software Engineer"
        },
        {
            timestamp: "December 2016 - June 2020",
            organization: "Tata Consultancy Services",
            role: "System Engineer Trainee"
        },
        {
            timestamp: "2012 - 2016",
            organization: "Jawaharlal Nehru College Of Engineering, Shimoga",
            role: "Bachelor Of Engineering in Electronics and Communication"
        }
      ]
    };
  },
};
</script>

<style>
.el-timeline-item__timestamp {
  font-size: 16px;
}
</style>
