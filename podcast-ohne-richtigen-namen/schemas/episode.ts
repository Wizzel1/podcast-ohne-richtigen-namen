import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'episode',
  type: 'document',
  title: 'Episode',
  fields: [
    defineField({
        name: 'episodeNumber',
        type: 'number',
        title: 'Episode Number',
      }),
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
        name: 'solvedBy',
        title: 'Solved by',
        type: 'reference',
        to: {type: 'host'},
      }),
    defineField({
        name: 'spotifyId',
        type: 'string',
        title: 'Spotify Episode ID',
      }),
  ],
})
