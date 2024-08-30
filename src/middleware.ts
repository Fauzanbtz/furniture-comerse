import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt'; // Assuming a custom JWT verification function

export function middleware(req: NextRequest) {
  console.log('Middleware running for:', req.nextUrl.pathname);

  const token = req.cookies.get('token')?.value;
  console.log('Token from cookies:', token);

  if (!token) {
    console.log('No token found, redirecting to login...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const decodedToken = verifyToken(token);
  console.log('Decoded Token:', decodedToken);

  if (!decodedToken) {
    console.log('Invalid token, redirecting to login...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  console.log('Token valid, proceeding to route...');
  return NextResponse.next();
}


export const config = {
  matcher: ['/admin-dashboard', '/another-protected-path/:path*'],
};