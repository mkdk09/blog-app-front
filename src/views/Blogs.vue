<template>
  <div>
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
        <form>
          <v-text-field v-model="blog.title" label="Title"></v-text-field>
          <v-textarea v-model="blog.body" label="Body"></v-textarea>

          <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
        </form>
      </v-col>
      <v-cols cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>aa</td>
            <td>aa</td>
            <td>show</td>
            <td>Edit</td>
            <td>Destroy</td>
          </tr>
        </table>
      </v-cols>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {}
    }
  },
  methods: {
    onSubmit() {
      
    }
  }
}
</script>