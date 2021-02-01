<template>
  <div class="miscellaneous">
    <div
      v-for="user in myProjects"
      class="my-projects-box"
      :key="myProjects.indexOf(user)"
    >
      <el-card>
        <h2>{{ user.title }}</h2>
        <el-image :src="user.image"></el-image>
        <el-row
          :gutter="20"
          v-for="stack in user.usedStack"
          :key="user.usedStack.indexOf(stack)"
        >
          <el-col :span="6">
            <el-tag class="tag" effect="dark" color="#303133">{{
              stack.toUpperCase()
            }}</el-tag>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import projects from "../assets/projects.json";

export default {
  data() {
    return {
      myProjects: [],
    };
  },
  mounted() {
    this.getTheProjects();
  },
  methods: {
    getTheProjects() {
      this.myProjects = projects;
      console.log(this.myProjects);
    },
  },
};
</script>
<style lang="scss" scoped>
.my-projects-box {
  display: flex;
  flex-direction: column;
}
</style>
