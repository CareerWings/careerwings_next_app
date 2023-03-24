import NextAuth from "next-auth"
import process from "process"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // TODO: Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_OAUTH_GITHUB_ID,
            clientSecret: process.env.NEXTAUTH_OAUTH_GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.NEXTAUTH_OAUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXTAUTH_OAUTH_GOOGLE_CLIENT_SECRET,
        })
    ],
}

export default NextAuth(authOptions)