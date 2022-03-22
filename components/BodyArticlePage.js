import { Box, Card, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Quote from './Quote'
import Share from './Share'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Tags from '../components/Tags'

export default function BodyArticlePage({
  img_main,
  img_main_alt,
  img_main_credits,
  title_h1,
  body_h1,
  quote,
  title_h2,
  body_h2,
  img_secondary_h2,
  img_secondary_alt,
  img_secondary_credits,
  title_2_h2,
  body_2_h2,
  conclusion,
  // TAGS
  tag_1,
  tag_2,
  tag_3,

  // EXTRA
  title_3_h2,
  body_3_h2,
  imgSecondary_3_h2,
  title_4_h2,
  body_4_h2,
}) {
  return (
    <Box>
      <Card
        sx={{
          mt: 3.4,
          maxWidth: 752,
          width: '100%',
          borderRadius: 4,
          boxShadow:
            ' 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)',
        }}
      >
        <CardMedia
          sx={{
            maxWidth: 922,
          }}
        >
          <Image
            src={'https://' + img_main}
            width={922}
            height={622}
            layout='responsive'
            objectFit='cover'
            priority
            alt={img_main_alt}
          />
        </CardMedia>
      </Card>
      <Box
        mt={0.8}
        sx={{
          textAlign: {
            xs: 'center',
            lg: 'left',
          },
        }}
      >
        <Typography
          variant='overline'
          color='text.primary'
          sx={{
            fontSize: { xs: 10 },
            ml: { xs: 0, lg: 2 },
          }}
        >
          {img_main_credits}
        </Typography>
      </Box>
      <Box
        mt={4}
        sx={{
          maxWidth: 752,
        }}
      >
        <Typography
          component='h1'
          fontWeight={800}
          sx={{ fontSize: { xs: 26, lg: 29 } }}
        >
          {title_h1}
        </Typography>
        <Box
          color='text.secondary'
          mt={4}
          sx={{ fontSize: { xs: 16, lg: 17 } }}
        >
          {documentToReactComponents(body_h1)}
        </Box>
        {/* QUOTE TEXT */}
        <Quote quote={quote} />
        <Typography
          mt={3}
          component='h2'
          fontWeight={700}
          sx={{ fontSize: { xs: 22, lg: 25 } }}
        >
          {title_h2}
        </Typography>
        <Box
          color='text.secondary'
          mt={2}
          sx={{ fontSize: { xs: 16, lg: 17 } }}
        >
          {documentToReactComponents(body_h2)}
        </Box>
        <Card
          sx={{
            mt: 3.4,
            maxWidth: 752,
            width: '100%',
            borderRadius: 4,
            boxShadow:
              ' 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)',
          }}
        >
          <CardMedia
            sx={{
              maxWidth: 922,
            }}
          >
            <Image
              src={'https://' + img_secondary_h2}
              width={922}
              height={622}
              layout='responsive'
              objectFit='cover'
              alt={img_secondary_alt}
            />
          </CardMedia>
        </Card>
        <Box
          mt={0.8}
          sx={{
            textAlign: {
              xs: 'center',
              lg: 'left',
            },
          }}
        >
          <Typography
            variant='overline'
            color='text.primary'
            sx={{
              fontSize: { xs: 10 },
              ml: { xs: 0, lg: 2 },
            }}
          >
            {img_secondary_credits}
          </Typography>
        </Box>
        <Typography
          mt={3}
          component='h2'
          fontWeight={700}
          sx={{ fontSize: { xs: 22, lg: 25 } }}
        >
          {title_2_h2}
        </Typography>
        <Box
          color='text.secondary'
          mt={2}
          sx={{ fontSize: { xs: 16, lg: 17 } }}
        >
          {documentToReactComponents(body_2_h2)}
        </Box>

        {/* EXTRA */}

        {title_3_h2 && body_3_h2 && imgSecondary_3_h2 ? (
          <Box>
            <Typography
              mt={3}
              component='h2'
              fontWeight={700}
              sx={{ fontSize: { xs: 22, lg: 25 } }}
            >
              {title_3_h2}
            </Typography>
            <Box
              color='text.secondary'
              mt={2}
              sx={{ fontSize: { xs: 16, lg: 17 } }}
            >
              {documentToReactComponents(body_3_h2)}
            </Box>
            <Card
              sx={{
                mt: 3.4,
                maxWidth: 752,
                width: '100%',
                borderRadius: 4,
                boxShadow:
                  ' 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)',
              }}
            >
              <CardMedia
                sx={{
                  maxWidth: 922,
                }}
              >
                <Image
                  src={'https://' + imgSecondary_3_h2.fields.file.url}
                  width={922}
                  height={622}
                  layout='responsive'
                  objectFit='cover'
                  alt={imgSecondary_3_h2.fields.description}
                />
              </CardMedia>
            </Card>
            <Typography
              variant='overline'
              color='text.primary'
              sx={{
                fontSize: { xs: 10 },
                ml: { xs: 0, lg: 2 },
              }}
            >
              {imgSecondary_3_h2.fields.title}
            </Typography>
          </Box>
        ) : null}

        {title_4_h2 && body_4_h2 ? (
          <Box>
            <Typography
              mt={3}
              component='h2'
              fontWeight={700}
              sx={{ fontSize: { xs: 22, lg: 25 } }}
            >
              {title_4_h2}
            </Typography>
            <Box
              color='text.secondary'
              mt={2}
              sx={{ fontSize: { xs: 16, lg: 17 } }}
            >
              {documentToReactComponents(body_4_h2)}
            </Box>
          </Box>
        ) : null}

        {/* END EXTRA */}

        <Typography
          mt={3}
          component='p'
          fontWeight={700}
          sx={{ fontSize: { xs: 22, lg: 25 } }}
        >
          Conclusión
        </Typography>
        <Typography
          color='text.secondary'
          mt={2}
          sx={{ fontSize: { xs: 16, lg: 17 } }}
        >
          {conclusion}
        </Typography>
        <Box mt={3} display='flex' justifyContent='flex-start'>
          <Tags tag_1={tag_1} tag_2={tag_2} tag_3={tag_3} />
        </Box>
        <Box
          mt={4}
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'flex' },
            justifyContent: { sm: 'center', md: 'right' },
          }}
        >
          <Share />
        </Box>
      </Box>
    </Box>
  )
}
