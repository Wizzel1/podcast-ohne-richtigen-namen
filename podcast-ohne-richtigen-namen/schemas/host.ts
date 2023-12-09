import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'host',
  type: 'document',
  title: 'Host',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
})
