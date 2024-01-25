import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';



const FilterComboBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='flex justify-between text-xs text-black bg-transparent border-border px-3 py-2'>
          Compensation
          <ChevronDown className='ml-2 h-4 w-4 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-fit px-1 py-2 text-xs'>
        <Command className='text-xs'>
          <CommandInput placeholder='Select Payment Type...'/>
          <CommandEmpty>No Payment Found</CommandEmpty>
          <CommandGroup>
            <CommandItem>Paid</CommandItem>
            <CommandItem>Unpaid</CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterComboBox;
