import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Modal({ open, content }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex">{open}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm">{content}</AlertDialogContent>
    </AlertDialog>
  );
}

export default Modal;
