import { AbilityBuilder, Ability } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role, subject, permissions) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  if (permissions?.length) can(['read'], [...permissions])

  switch (role) {
    case 'admin':
      can('manage', 'all')
      can(['read'], "admin-options")
      break

    case 'user':
      can(['read'], "social")
      can(['read'], "social-comments")
      can(['read'], "profile-public")
      can(['read'], "profile-private")
      can(['read'], "interests")
      can(['read'], "timeline")
      break

    default:
      can(['read'], subject)
      break
  }

  return rules
}

export const buildAbilityFor = (role, subject, permissions) => {
  return new AppAbility(defineRulesFor(role, subject, permissions), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object.type
  })
}

export const defaultACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
