import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";

interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <MuiCard {...props}>
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
    </MuiCard>
  );
}
