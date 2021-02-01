<template>
  <div class="blog">
    <div>
      <div>
        <div
          v-for="user in myBlogs"
          class="blog-card"
          :key="myBlogs.indexOf(user)"
        >
          <el-card>
            <div class="published-date">
              {{ new Date(user.pubDate).toDateString() }}
            </div>

            <h1>{{ user.title }}</h1>
            <img :src="user.image" />
            <div>
              {{ user.description.substring(0, 1000) }}
              <h3 class="read-more">
                <a :href="user.link" target="_blank">..Read more</a>
              </h3>
            </div>
            <div class="blog-categories">
              <div
                v-for="category in user.categories"
                :key="user.categories.indexOf(category)"
              >
                <el-tag class="tag" effect="dark" color="#303133">{{
                  category.toUpperCase()
                }}</el-tag>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      myBlogs: [],
      tagColor: "#303133",
    };
  },

  mounted() {
    this.getMyBlogsFromMedium();
  },
  methods: {
    getMyBlogsFromMedium() {
      axios
        .get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sanchithasr`
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.myBlogs = this.filterMyBlogs(response.data.items);
          console.log(this.myBlogs);
          console.log(this.myBlogs.items);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    filterMyBlogs(blogs) {
      return blogs.filter((blog) => blog.categories.length !== 0);
    },
  },
};
</script>
<style scoped lang="scss">
.blog-card {
  margin: 3%;
}
el-card {
  padding: 7%;
  margin: 6%;
}
.published-date {
  display: flex;
  justify-content: flex-end;
  color: #606266;
}
.blog-categories {
  display: flex;
  flex-direction: row;
  margin: 3% 3% 3% 0;
  .tag {
    margin-right: 25px;
  }
}

.read-more {
  cursor: pointer;
}
</style>

