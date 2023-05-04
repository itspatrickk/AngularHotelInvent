import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { RoomList, Room } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  
  @Input() rooms:RoomList[]=[];

  @Output() selectedRoom = new EventEmitter<RoomList>()

  selectRoom(rooms:RoomList){
    this.selectedRoom.emit(rooms);
  }
  piliRoom(rooms:RoomList){
    this.selectedRoom.emit(rooms);
  }

}
