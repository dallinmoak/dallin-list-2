"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Card className="w-[15em]">
        <CardHeader>
          <CardTitle>Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setTheme}>
            <SelectTrigger>
              <SelectValue placeholder="select a theme..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">light</SelectItem>
              <SelectItem value="dark">dark</SelectItem>
              <SelectItem value="barbie">barbie</SelectItem>
              <SelectItem value="system">system</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}
