<template>
  <div class="btn-group" role="group">
    <button class="btn btn-success" v-if="editMode" title="Save" @click="toggle">
      <span class="glyphicon" v-bind:class="icons.save" aria-hidden="true"></span>
    </button>
    <button class="btn btn-warning" v-if="!editMode" title="Edit" @click="toggle">
      <span class="glyphicon" v-bind:class="icons.edit" aria-hidden="true"></span>
    </button>
    <button class="btn btn-danger" title="Remove">
      <span class="glyphicon" v-bind:class="icons.remove" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>
function Icons (save, edit, remove) {
  this.save = save
  this.edit = edit
  this.remove = remove
}

export default {
  name: 'RowActions',
  props: {
    rowIndex: {
      type: Number,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    },
    defaultEditMode: {
      type: Boolean,
      default: false
    },
    icons: {
      type: Icons,
      default: function () {
        return new Icons(
          'glyphicon-floppy-saved',
          'glyphicon-pencil',
          'glyphicon-remove'
        )
      }
    }
  },
  data () {
    return {
      isEditMode: this.defaultEditMode
    }
  },
  methods: {
    toggle () {
      console.log(this)
      this.editMode = !this.editMode
    }
  }
}
</script>

<style scoped></style>
