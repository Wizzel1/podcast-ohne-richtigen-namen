import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'question',
  type: 'document',
  title: 'Question',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      type: 'string',
      title: 'Answer',
    }),
    defineField({
      name: 'answerLink',
      type: 'url',
      title: 'Answer Link',
    }),
    defineField({
      name: 'askedBy',
      title: 'Asked by',
      type: 'reference',
      to: {type: 'host'},
    }),
    defineField({
      name: 'solvedBy',
      title: 'Solved by',
      type: 'reference',
      to: {type: 'host'},
    }),
  ],
})
