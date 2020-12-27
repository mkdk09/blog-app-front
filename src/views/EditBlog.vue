<template>
  <div>
    <h2>Editing Blog</h2>
    <v-form ref="checkForm">
      <v-text-field
        v-model="blog.title"
        label="Title"
        :rules="[required('Title')]"
      ></v-text-field>
      <v-textarea
        v-model="blog.body"
        label="Body"
        :rules="[required('Body')]"
      ></v-textarea>

      <v-btn class="mr-4" @click="updateBlog">Update</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['blogs']),
    blog() {
      return this.blogs.find(blogId => blogId.id == this.$route.params.id) || {}
    },
  },
  data () {
    return {
      required(propertyType) { 
        return v => v && v.length > 0 || `You must input a ${propertyType}`
      }
    }
  },
  methods: {
    async updateBlog() {
      if (this.$refs.checkForm.validate()) {
        const blog = await this.$store.dispatch('editBlog', this.blog) // ①
        this.$router.push({ name: 'show-blog', params: { id: blog.id }})
      }
    }
  }
}
</script>