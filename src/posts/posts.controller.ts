import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { PostsService } from './posts.service';
import { marked } from 'marked';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  getList() {
    return this.postsService.listPosts();
  }

  @Get(':slug')
  getPost(@Param('slug') slug: string, @Res() res: Response) {
    const md = this.postsService.getMarkdown(slug);
    const html = marked(md);

    const parts = slug.split('-');
    const dateStr = `${parts[0]}-${parts[1]}-${parts[2]}`;
    const date = new Date(dateStr).toLocaleDateString('pt-BR');
    const title = parts.slice(3).join(' ').replace(/-/g, ' ');

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="post-wrapper">
          <a href="/" class="back-link">← back</a>
          <header class="post-header">
            <time datetime="${dateStr}" class="post-date">${date}</time>
            <h1 class="post-title">${title}</h1>
          </header>
          <article class="post-content">${html}</article>
        </div>
      </body>
      </html>
    `);
  }
}
