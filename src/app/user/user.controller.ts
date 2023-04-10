import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }

  @Get(":userId")
  getUser(@Param("userId") userId: string) {
    return this.userService.getUser(userId);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
