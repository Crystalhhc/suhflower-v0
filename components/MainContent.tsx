'use client';
import { 
  Container, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Box,
  DropdownMenu,
  Checkbox,
  Separator,
  IconButton,
  Popover,
  ScrollArea
} from '@radix-ui/themes';
import { 
  DashboardIcon,
  StarFilledIcon,
  TimerIcon,
  DotIcon,
  DotsHorizontalIcon,
  MixIcon,
  ArchiveIcon,
  TrashIcon,
  GearIcon,
  HamburgerMenuIcon,
  ExitIcon,
  Pencil2Icon,

  
 } from '@radix-ui/react-icons';

import {
  LibraryIcon,
  LayoutTemplateIcon,
  UsersIcon
} from 'lucide-react';
import PageFrame from './PageFrame';


export default function MainContent() {
  return (
 
    <Container size="4">
      <Flex direction="column" justify="center">
          <ScrollArea type="always" scrollbars="vertical" style={{ height: 880 }}>
            <PageFrame />
            <PageFrame />
          </ScrollArea>
      </Flex>    
        
    </Container>
   

  )
}