import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import React from 'react';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const { path } = params;

  if (path.length < 2) {
    return new Response('Invalid path', { status: 400 });
  }

  const width = parseInt(path[path.length - 2]);
  const height = parseInt(path[path.length - 1]);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    return new Response('Invalid width or height', { status: 400 });
  }

  // Generate the placeholder image
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${Math.min(width, height) / 10}px`,
          background: '#E0E0E0',
          color: '#888888',
        },
      },
      `${width}x${height}`
    ),
    {
      width,
      height,
    }
  );
}
