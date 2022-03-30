import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardArticles from './CardArticles'

export default function Articles({ articles }) {
  const [arrLikes, setArrLikes] = useState([])

  useEffect(() => {
    function checkArrLikes() {
      const item = JSON.parse(localStorage.getItem('likes') || '[]')
      if (item.length > 0) {
        setArrLikes(item)
      } else {
        for (let i = 0; i < articles.length; i++) {
          arrLikes[i] = null
        }
      }
    }

    window.addEventListener('storage', checkArrLikes())

    return () => {
      window.removeEventListener('storage', checkArrLikes())
    }
  }, [])

  // console.log(arrLikes)

  return (
    <>
      <Grid container sx={{ pb: 1, px: 2 }}>
        <Grid item md={2} />
        <Grid item md={6}>
          <Typography
            variant='h2'
            component='h2'
            sx={{ fontSize: 30, fontWeight: 800 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 2 }}>
        <Grid item md={2} />
        <Grid item md={6}>
          <Typography
            sx={{ fontSize: 18, fontWeight: 600 }}
            color='text.secondary'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            doloribus reprehenderit quia facere aliquam saepe alias.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          mt: 6,
          px: 3,
        }}
        display='flex'
        justifyContent='space-evenly'
      >
        {/* HERE ADD MORE ARTICLES */}
        {articles.map((article, index) => (
          // console.log(article.fields.bodyH1.content[0].content[0].value)

          <Grid
            item
            xs={12}
            md={8}
            lg={5}
            display='flex'
            justifyContent='center'
            sx={{ my: 2 }}
            key={article.sys.id}
          >
            <CardArticles
              id={article.sys.id}
              index={index}
              arrLikes={arrLikes}
              setArrLikes={setArrLikes}
              slug={article.fields.slug}
              img_main={article.fields.imgMain.fields.file.url}
              img_main_alt={article.fields.imgMain.fields.description}
              img_avatar={article.fields.author.fields.avatar.fields.file.url}
              img_avatar_alt={
                article.fields.author.fields.avatar.fields.description
              }
              author={article.fields.author.fields.name}
              date={article.fields.dateArticle}
              time={article.fields.timeRead}
              title_h1={article.fields.titleH1}
              body_h1={article.fields.bodyH1.content[0].content[0].value}
              tag_1={article.fields.tags[0].fields.name}
              tag_2={article.fields.tags[1].fields.name}
              tag_3={article.fields.tags[2].fields.name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
