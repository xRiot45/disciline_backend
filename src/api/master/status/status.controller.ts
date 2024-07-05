import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
import { StatusService } from './status.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@ApiTags('Status')
@Controller('/api/master/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Status',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: StatusRequest,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Status',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: StatusResponse[] }> {
    return this.statusService.findAll();
  }

  @Get('/:statusId')
  @ApiOperation({
    summary: 'Get Data Status By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('statusId') statusId: string,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.findById(statusId);
  }

  @Put('/:statusId')
  @ApiOperation({
    summary: 'Update Status',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('statusId') statusId: string,
    @Body() req: StatusRequest,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.update(statusId, req);
  }

  @Delete('/:statusId')
  @ApiOperation({
    summary: 'Delete Status',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('statusId') statusId: string,
  ): Promise<WebResponse> {
    return this.statusService.delete(statusId);
  }
}
