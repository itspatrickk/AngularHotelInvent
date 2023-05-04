import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Patrick hotel";
  numberOfRooms = 30;
  hideRooms = false;
  num1! : number;
  num2! : number;
  
  rooms : Room = {
    totalRooms: 4,
    availableRooms: 10,
    bookedRooms:40
  }

  roomList : RoomList [] = []

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  
  ngOnInit():void{
   this.roomList = [
      {
        roomNumber:1,
        roomType: 'Pangmayaman',
        amenities: 'May Aircon',
        price: 10000,
        photos: 'https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg',
        checkinTime:new Date('11-Apr-2023'),
        checkoutTime:new Date ('12-Apr-2023'),
        rating:4.53132
      },
      {
        roomNumber: 2,
        roomType: 'Pangmayaman2',
        amenities: 'May Aircon',
        price: 10000,
        photos: 'https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg',
        checkinTime:new Date('11-Apr-2023'),
        checkoutTime:new Date ('12-Apr-2023'),
        rating:4.3
      },
      {
        roomNumber: 3,
        roomType: 'Pangmayaman3',
        amenities: 'May Aircon',
        price: 10000,
        photos: 'https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg',
        checkinTime:new Date('11-Apr-2023'),
        checkoutTime:new Date ('12-Apr-2023'),
        rating:4.2
      },
      {
        roomNumber: 4,
        roomType: 'Pangmayaman4',
        amenities: 'May Aircon',
        price: 10000,
        photos: 'https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg',
        checkinTime:new Date('11-Apr-2023'),
        checkoutTime:new Date ('12-Apr-2023'),
        rating:4.6
      }
    ]

  }

  selectedRoom!:RoomList;
  selectRoom(rooms:RoomList){
    this.selectedRoom = rooms;
  }
  

  }
  

