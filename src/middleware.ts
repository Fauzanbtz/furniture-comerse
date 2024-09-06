import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt'; // Fungsi verifikasi JWT kustom

export async function middleware(req: NextRequest) {
  console.log('Middleware running for:', req.nextUrl.pathname);

  // Ambil token dari cookie
  const token = req.cookies.get('token')?.value;
  console.log('Token from cookies:', token);

  if (!token) {
    console.log('No token found, redirecting to login...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Verifikasi token
  const decodedToken = await verifyToken(token);
  console.log('Decoded Token:', decodedToken);

  if (!decodedToken) {
    console.log('Invalid token, redirecting to login...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Cek peran pengguna dari token
  if (decodedToken.role !== 'ADMIN') {
    console.log('User does not have admin privileges, redirecting to login...');
    return NextResponse.redirect(new URL('/', req.url));
  }

  console.log('Token valid and user is admin, proceeding to route...');
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-dashboard', '/another-protected-path/:path*'],
};
