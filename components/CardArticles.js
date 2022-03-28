import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  Avatar,
  Badge,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Link as LinkMaterial,
} from '@mui/material'
import Image from 'next/image'
import Tags from './Tags'
import { format, register } from 'timeago.js'
import es from '../utils/es'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import { AvatarAnimations2 } from '../styles/globalStyles'
import { useReducer } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

register('my-locale', es)

export default function CardArticles({
  id,
  index,
  arrLikes,
  setArrLikes,
  slug,
  img_main,
  img_main_alt,
  img_avatar,
  img_avatar_alt,
  author,
  date,
  time,
  title_h1,
  body_h1,
  tag_1,
  tag_2,
  tag_3,
}) {
  const animations = AvatarAnimations2()

  const [arr, setArr] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    if (arrLikes) {
      setArr(arrLikes)
    }
    if (refresh === true) {
      setArr(arrLikes)
      setRefresh(false)
    }
  }, [arr, arrLikes, refresh])

  const like = () => {
    const newArr = arr
    newArr[index] = !arr[index]
    setArr(newArr)
    setRefresh(true)
    localStorage.setItem('likes', JSON.stringify(newArr))
  }

  const dislike = () => {
    const newArr = arr
    newArr[index] = !arr[index]
    setArr(newArr)
    setRefresh(true)
    localStorage.setItem('likes', JSON.stringify(newArr))
  }

  return (
    <Card
      sx={{
        display: {
          xs: 'block',
          sm: 'flex',
          md: 'flex',
        },
        borderRadius: 8,
        backgroundColor: '#1E293B',
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            width: { sm: 275, md: 245 },
            height: '100%',
            display: { xs: 'none', sm: 'block', md: 'block' },
            position: 'relative',
          }}
        >
          <Link href={'/' + slug}>
            <a>
              <Image
                src={'https:' + img_main}
                alt={img_main_alt}
                // width={640}
                // height={359}
                layout='fill'
                objectFit='cover'
                priority
              />
            </a>
          </Link>
        </CardMedia>
        <CardMedia
          sx={{
            width: { sm: 275, md: 245, xl: '100%' },
            height: '100%',
            display: { xs: 'block', sm: 'none', md: 'none' },
          }}
        >
          <Link href={'/' + slug} alt=''>
            <a>
              <Image
                src={'https:' + img_main}
                alt={img_main_alt}
                width={640}
                height={432}
                layout='responsive'
                objectFit='cover'
                priority
              />
            </a>
          </Link>
        </CardMedia>
      </CardActionArea>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Grid container display='flex' justifyContent='space-between'>
            <Grid item display='flex' alignSelf='center'>
              <Avatar
                sx={{
                  width: 26,
                  height: 26,
                  background: '#facc15',
                  transform: 'rotate(-20deg)',
                  '&:hover': animations,
                }}
                variant='circle'
              >
                <Image
                  src={'https:' + img_avatar}
                  alt={img_avatar_alt}
                  // width={64}
                  // height={64}
                  layout='fill'
                  objectFit='cover'
                  priority
                />
              </Avatar>
              <Box
                sx={{ ml: 1, textDecoration: 'none' }}
                display='flex'
                alignSelf='center'
              >
                <Link href='#' alt=''>
                  <a
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <Typography
                      variant='caption'
                      sx={{
                        fontSize: 12,
                        letterSpacing: 0.8,
                      }}
                      color='secondary'
                      fontWeight={700}
                    >
                      {author}
                      <Typography
                        variant='caption'
                        color='secondary'
                        ml={0.4}
                        sx={{
                          fontSize: 10.5,
                          textTransform: 'lowercase',
                          letterSpacing: 0.7,
                        }}
                      >
                        &middot; {format(date, 'my-locale')} &middot;{' '}
                        {`${time}min `}
                      </Typography>
                    </Typography>
                  </a>
                </Link>
              </Box>
            </Grid>
            <CardActions>
              <Grid item display='flex' alignSelf='center'>
                {arr.length > 0 && arr[index] ? (
                  <LinkMaterial
                    onClick={() => like()}
                    sx={{
                      color: '#ef4444',

                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Tooltip title='Me gusta'>
                      <FavoriteIcon
                        sx={{
                          fontSize: 26,
                          verticalAlign: 'middle',
                          display: 'inline-flex',
                          ml: 0.4,
                        }}
                      />
                    </Tooltip>
                  </LinkMaterial>
                ) : (
                  <LinkMaterial
                    onClick={() => dislike()}
                    sx={{
                      color: '#ef4444',

                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Tooltip title='No me gusta'>
                      <FavoriteBorderIcon
                        sx={{
                          fontSize: 26,
                          verticalAlign: 'middle',
                          display: 'inline-flex',
                          ml: 0.4,
                        }}
                      />
                    </Tooltip>
                  </LinkMaterial>
                )}
              </Grid>
            </CardActions>
          </Grid>
          <CardActionArea>
            <Link href={'/' + slug} alt=''>
              <a
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  color='text.primary'
                  component='div'
                  variant='h6'
                  sx={{ fontWeight: 'bold', mt: 0.8 }}
                >
                  {title_h1}
                </Typography>
              </a>
            </Link>
          </CardActionArea>
          <CardActionArea>
            <Link href={'/' + slug} alt=''>
              <a
                style={{
                  textDecoration: 'none',
                }}
              >
                <Box
                  className='truncateText'
                  color='text.secondary'
                  sx={{
                    pr: 1,
                    lineHeight: 1.6,
                    letterSpacing: 0.1,
                    fontSize: 14.7,
                  }}
                >
                  {body_h1}
                </Box>
              </a>
            </Link>
          </CardActionArea>
          <Divider sx={{ my: 2, mx: 3, bgcolor: '#94A3B8' }} />
          <Tags tag_1={tag_1} tag_2={tag_2} tag_3={tag_3} />
        </CardContent>
      </Box>
    </Card>
  )
}
