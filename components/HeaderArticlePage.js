import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Share from './Share'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { AvatarAnimations, AvatarAnimations2 } from '../styles/globalStyles'
import { format, register } from 'timeago.js'
import es from '../utils/es'

register('my-locale', es)

export default function HeaderArticlePage({
  name,
  img_avatar,
  img_avatar_alt,
  date,
  time,
}) {
  const animations = AvatarAnimations()
  const animations2 = AvatarAnimations2()

  return (
    <Box flexDirection='row' display='flex'>
      <Avatar
        sx={{
          width: 42,
          height: 42,
          background: '#facc15',
          transform: 'rotate(-20deg)',
          '&:hover': { xs: animations, lg: animations2 },
        }}
      >
        {/* FIXME: */}
        <Image
          src={'https:' + img_avatar}
          layout='fill'
          objectFit='cover'
          alt={img_avatar_alt}
          priority
        />
      </Avatar>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        mx={1.8}
      >
        <Box>
          <Typography fontSize={14} textTransform='capitalize' fontWeight={500}>
            {name}
          </Typography>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography fontSize={13} color='text.secondary'>
              {format(date, 'my-locale')} &middot; {`${time}min `}
            </Typography>
            <AccessAlarmIcon
              sx={{
                display: 'flex',
                alignSelf: 'center',
                width: 15.5,
                color: 'text.secondary',
                ml: 0.6,
              }}
            />
          </Box>
        </Box>
        {/* JUST SCREEN MD^ */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          <Share />
        </Box>
      </Box>
    </Box>
  )
}
