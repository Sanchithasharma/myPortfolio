<template>
  <div class="blog">
    <div>
      <div>
        <div
          v-loading="loading"
          element-loading-text="Loading..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="#606266"
          v-for="user in myBlogs"
          class="blog-card"
          :key="myBlogs.indexOf(user)"
        >
          <el-card shadow="always" class="box-card">
            <div class="published-date">
              {{ new Date(user.pubDate).toDateString() }}
            </div>
            <div class="blog-area">
              <h1>
                <a :href="user.link" target="_blank">{{ user.title }}</a>
              </h1>
              <el-image width="100px" :src="user.thumbnail"></el-image>

              <div class="blog-description">
                {{ htmlToText(user.content.substring(0, 200)) }}
                <span class="read-more">
                  <a :href="user.link" target="_blank" class="link">...Read more</a>
                </span>
              </div>
            </div>
            <div class="blog-categories">
              <el-row
                :gutter="20"
                v-for="category in user.categories"
                :key="user.categories.indexOf(category)"
              >
                <el-col :span="6">
                  <el-tag class="tag" effect="dark" color="#303133">{{
                    category.toUpperCase()
                  }}</el-tag>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const { htmlToText } = require("html-to-text");

export default {
  name: "Blog",
  data() {
    return {
      myBlogs: [],
      tagColor: "#303133",
      loading: false,
    };
  },

  mounted() {
    this.getMyBlogsFromMedium();
  },
  methods: {
    getMyBlogsFromMedium() {
    this.loading = true;
      axios
        .get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sanchithasr`
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.myBlogs = this.filterMyBlogs(response.data.items);
          this.loading = false;

          console.log(this.myBlogs);
          console.log(this.myBlogs.items);
        })
        .catch((e) => {
          this.errors.push(e);
          this.loading = false;
        });
    },
    filterMyBlogs(blogs) {
      return blogs.filter((blog) => blog.categories.length !== 0);
    },
    htmlToText(html) {
      const text = htmlToText(html, {
        wordwrap: 130,
      });
      return text;
    },
  },
};
</script>
<style scoped lang="scss">
.blog-card {
  margin-top: 2%;
  margin-left: 17%;
  margin-right: 17%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
}
el-card {
  padding: 70%;
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
  justify-content: center;
  flex-wrap: wrap;
  .tag {
    margin-right: 10px;
    margin-top: 10px;
    border-color: none

  }

  .el-tag--dark {
    border-color: transparent;
  }
}

.blog-area {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0% 7% 0 7%;
}

.blog-description {
  font-size: 22px;
  margin-top: 4%;
  font-weight: 200;
}

.read-more {
  cursor: pointer;
  font-size: 23px;
  font-weight: bold;
}
h1 {
  a {
    color: black;
    text-decoration: none;
  }
}

.img {
  width: 50rem;
}

@media only screen and (max-width: 800px) {
  .blog-card {
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 2%;
  }
}

.link {
  color: black;
}
</style>

