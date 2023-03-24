import NextAuth from "next-auth"
import process from "process"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // TODO: Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_OAUTH_GITHUB_ID,
            clientSecret: process.env.NEXTAUTH_OAUTH_GITHUB_SECRET,
        }),

        // ...TODO: add more providers here
    ],
}

export default NextAuth(authOptions)