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
  Popover
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
  PlusIcon
  
 } from '@radix-ui/react-icons';

import {
  LibraryIcon,
  LayoutTemplateIcon,
  UsersIcon
} from 'lucide-react';

import DocTree from '../components/DocTree';

export default function Sidebar() {
  return (
    <Flex direction="column" shrink="1">
      <Box style={{ 
        width: 200,
        background: 'var(--gray-a2)', 
        borderRadius: 'var(--radius-3)',
        boxShadow: 'var(--shadow-2)'
        }}>

          <Flex direction="column" gap="1" p="2" ml="3" mr="3">
            <Box mb="2">
              <Flex align="center" gap="3" justify="between">
                <Button variant="ghost" size="2">
                  <HamburgerMenuIcon />
                </Button>  
                <Heading size="2">Workspace</Heading>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="ghost" size="2">
                      <DotsHorizontalIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item shortcut="⌘ E">
                      <Button variant="ghost">
                        <PlusIcon />New Workspace
                        </Button>
                      </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ D">
                      <Flex gap="1">
                        <Checkbox defaultChecked/>Workspace
                      </Flex>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ D">
                      <Flex gap="1">
                        <Checkbox />Workspace-1
                      </Flex> 
                      </DropdownMenu.Item> 
                  </DropdownMenu.Content>
                </DropdownMenu.Root>

              </Flex>
            </Box> 

            <Separator size="4"/> 

            <Flex direction="column" gap="4" justify="start" align="start" mt="2">
              <Button variant="ghost" size="2" color="gray"  highContrast>
                <DashboardIcon />Dashboard
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <StarFilledIcon />Stars
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <TimerIcon />Recent
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <Pencil2Icon />Draft
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <MixIcon />Content Library
              </Button>
             
              <Button variant="ghost" size="2" color="gray" highContrast>
                <LibraryIcon size={16}/>Documents
              </Button>
            <DocTree />
              <Button variant="ghost" size="2" color="gray" highContrast>
                <LayoutTemplateIcon size={ 16 } />Templates
              </Button>

         

              <Button variant="ghost" size="2" color="gray" highContrast>
                <ArchiveIcon />Archive
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <TrashIcon />Trash
              </Button>

            

              <Button variant="ghost" size="2" color="gray" highContrast>
                <UsersIcon size={ 16 }/>Team
              </Button>
              <Button variant="ghost" size="2" color="gray" highContrast>
                <GearIcon />Settings
              </Button>

              <Separator size="4"/>
              <Button variant="ghost" size="2" color="red">
                <ExitIcon />Log out
              </Button>
  
            </Flex>
          </Flex>
      </Box> 
    </Flex>  
      

  )
}
