import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { AgamaService } from './agama.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
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
import { WebResponse } from 'src/common/dto/web.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('Agama')
@Controller('/api/master/agama')
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Agama',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async create(
    @Body() req: AgamaRequest,
  ): Promise<{ data: AgamaResponse }> {
    return this.agamaService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Agama',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: AgamaResponse[] }> {
    return this.agamaService.findAll();
  }

  @Get('/:agamaId')
  @ApiOperation({
    summary: 'Get Data Agama By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('agamaId') agamaId: string,
  ): Promise<{ data: AgamaResponse }> {
    return this.agamaService.findById(agamaId);
  }

  @Put('/:agamaId')
  @ApiOperation({
    summary: 'Update Agama',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async update(
    @Param('agamaId') agamaId: string,
    @Body() req: AgamaRequest,
  ): Promise<{ data: AgamaResponse }> {
    return this.agamaService.update(agamaId, req);
  }

  @Delete('/:agamaId')
  @ApiOperation({
    summary: 'Delete Agama',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async delete(@Param('agamaId') agamaId: string): Promise<WebResponse> {
    return this.agamaService.delete(agamaId);
  }
}
