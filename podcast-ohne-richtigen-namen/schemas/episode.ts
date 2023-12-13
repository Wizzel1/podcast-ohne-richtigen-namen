import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'episode',
  type: 'document',
  title: 'Episode',
  fields: [
    defineField({
      name: 'number',
      type: 'number',
      title: 'Number',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'Questions',
      of: [
        {
          type: 'reference',
          to: [{type: 'question'}],
        },
      ],
    }),
 
    defineField({
      name: 'spotifyUrl',
      type: 'url',
      title: 'Spotify Episode URL',
    }),
  ],
})
