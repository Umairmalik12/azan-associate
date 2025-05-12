"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"

export function PropertyFilters() {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [status, setStatus] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would filter properties
    console.log({ location, propertyType, priceRange, status })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6 text-[#1A237E]">Filter Properties</h3>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="multan">Multan</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="qatar">Qatar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Property Type</label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
                <SelectItem value="farmhouse">Farmhouse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="for-rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Price Range (in millions)</label>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              onValueChange={(value) => setPriceRange(value as number[])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0M</span>
              <span>
                {priceRange[0]}M - {priceRange[1]}M
              </span>
              <span>100M+</span>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#1A237E] hover:bg-[#0D1B69]">
          <Search className="mr-2 h-4 w-4" /> Search Properties
        </Button>
      </form>
    </div>
  )
}
