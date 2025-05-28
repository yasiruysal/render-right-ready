
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OutOfStockDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutOfStockDialog: React.FC<OutOfStockDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Out of Stock
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-center text-gray-600">
            Nuvé is currently out of stock. Please check back later!
          </p>
          <Button 
            onClick={onClose}
            className="bg-[rgba(91,114,71,1)] hover:bg-[rgba(81,104,61,1)] text-white px-8 py-2 rounded-full"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
