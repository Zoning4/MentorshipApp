"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachRolePolicyRequest$ = exports.AttachGroupPolicyRequest$ = exports.AttachedPolicy$ = exports.AttachedPermissionsBoundary$ = exports.AssociateDelegationRequestRequest$ = exports.AddUserToGroupRequest$ = exports.AddRoleToInstanceProfileRequest$ = exports.AddClientIDToOpenIDConnectProviderRequest$ = exports.AccessKeyMetadata$ = exports.AccessKeyLastUsed$ = exports.AccessKey$ = exports.AccessDetail$ = exports.AcceptDelegationRequestRequest$ = exports.errorTypeRegistries = exports.UnrecognizedPublicKeyEncodingException$ = exports.UnmodifiableEntityException$ = exports.ServiceNotSupportedException$ = exports.ServiceFailureException$ = exports.ServiceAccessNotEnabledException$ = exports.ReportGenerationLimitExceededException$ = exports.PolicyNotAttachableException$ = exports.PolicyEvaluationException$ = exports.PasswordPolicyViolationException$ = exports.OrganizationNotInAllFeaturesModeException$ = exports.OrganizationNotFoundException$ = exports.OpenIdIdpCommunicationErrorException$ = exports.NoSuchEntityException$ = exports.MalformedPolicyDocumentException$ = exports.MalformedCertificateException$ = exports.LimitExceededException$ = exports.KeyPairMismatchException$ = exports.InvalidUserTypeException$ = exports.InvalidPublicKeyException$ = exports.InvalidInputException$ = exports.InvalidCertificateException$ = exports.InvalidAuthenticationCodeException$ = exports.FeatureEnabledException$ = exports.FeatureDisabledException$ = exports.EntityTemporarilyUnmodifiableException$ = exports.EntityAlreadyExistsException$ = exports.DuplicateSSHPublicKeyException$ = exports.DuplicateCertificateException$ = exports.DeleteConflictException$ = exports.CredentialReportNotReadyException$ = exports.CredentialReportNotPresentException$ = exports.CredentialReportExpiredException$ = exports.ConcurrentModificationException$ = exports.CallerIsNotManagementAccountException$ = exports.AccountNotManagementOrDelegatedAdministratorException$ = exports.IAMServiceException$ = void 0;
exports.DeleteServiceLinkedRoleRequest$ = exports.DeleteServerCertificateRequest$ = exports.DeleteSAMLProviderRequest$ = exports.DeleteRoleRequest$ = exports.DeleteRolePolicyRequest$ = exports.DeleteRolePermissionsBoundaryRequest$ = exports.DeletePolicyVersionRequest$ = exports.DeletePolicyRequest$ = exports.DeleteOpenIDConnectProviderRequest$ = exports.DeleteLoginProfileRequest$ = exports.DeleteInstanceProfileRequest$ = exports.DeleteGroupRequest$ = exports.DeleteGroupPolicyRequest$ = exports.DeleteAccountAliasRequest$ = exports.DeleteAccessKeyRequest$ = exports.DelegationRequest$ = exports.DelegationPermission$ = exports.DeactivateMFADeviceRequest$ = exports.CreateVirtualMFADeviceResponse$ = exports.CreateVirtualMFADeviceRequest$ = exports.CreateUserResponse$ = exports.CreateUserRequest$ = exports.CreateServiceSpecificCredentialResponse$ = exports.CreateServiceSpecificCredentialRequest$ = exports.CreateServiceLinkedRoleResponse$ = exports.CreateServiceLinkedRoleRequest$ = exports.CreateSAMLProviderResponse$ = exports.CreateSAMLProviderRequest$ = exports.CreateRoleResponse$ = exports.CreateRoleRequest$ = exports.CreatePolicyVersionResponse$ = exports.CreatePolicyVersionRequest$ = exports.CreatePolicyResponse$ = exports.CreatePolicyRequest$ = exports.CreateOpenIDConnectProviderResponse$ = exports.CreateOpenIDConnectProviderRequest$ = exports.CreateLoginProfileResponse$ = exports.CreateLoginProfileRequest$ = exports.CreateInstanceProfileResponse$ = exports.CreateInstanceProfileRequest$ = exports.CreateGroupResponse$ = exports.CreateGroupRequest$ = exports.CreateDelegationRequestResponse$ = exports.CreateDelegationRequestRequest$ = exports.CreateAccountAliasRequest$ = exports.CreateAccessKeyResponse$ = exports.CreateAccessKeyRequest$ = exports.ContextEntry$ = exports.ChangePasswordRequest$ = exports.AttachUserPolicyRequest$ = void 0;
exports.GetInstanceProfileRequest$ = exports.GetHumanReadableSummaryResponse$ = exports.GetHumanReadableSummaryRequest$ = exports.GetGroupResponse$ = exports.GetGroupRequest$ = exports.GetGroupPolicyResponse$ = exports.GetGroupPolicyRequest$ = exports.GetDelegationRequestResponse$ = exports.GetDelegationRequestRequest$ = exports.GetCredentialReportResponse$ = exports.GetContextKeysForPrincipalPolicyRequest$ = exports.GetContextKeysForPolicyResponse$ = exports.GetContextKeysForCustomPolicyRequest$ = exports.GetAccountSummaryResponse$ = exports.GetAccountPasswordPolicyResponse$ = exports.GetAccountAuthorizationDetailsResponse$ = exports.GetAccountAuthorizationDetailsRequest$ = exports.GetAccessKeyLastUsedResponse$ = exports.GetAccessKeyLastUsedRequest$ = exports.GenerateServiceLastAccessedDetailsResponse$ = exports.GenerateServiceLastAccessedDetailsRequest$ = exports.GenerateOrganizationsAccessReportResponse$ = exports.GenerateOrganizationsAccessReportRequest$ = exports.GenerateCredentialReportResponse$ = exports.EvaluationResult$ = exports.ErrorDetails$ = exports.EntityInfo$ = exports.EntityDetails$ = exports.EnableOutboundWebIdentityFederationResponse$ = exports.EnableOrganizationsRootSessionsResponse$ = exports.EnableOrganizationsRootSessionsRequest$ = exports.EnableOrganizationsRootCredentialsManagementResponse$ = exports.EnableOrganizationsRootCredentialsManagementRequest$ = exports.EnableMFADeviceRequest$ = exports.DisableOrganizationsRootSessionsResponse$ = exports.DisableOrganizationsRootSessionsRequest$ = exports.DisableOrganizationsRootCredentialsManagementResponse$ = exports.DisableOrganizationsRootCredentialsManagementRequest$ = exports.DetachUserPolicyRequest$ = exports.DetachRolePolicyRequest$ = exports.DetachGroupPolicyRequest$ = exports.DeletionTaskFailureReasonType$ = exports.DeleteVirtualMFADeviceRequest$ = exports.DeleteUserRequest$ = exports.DeleteUserPolicyRequest$ = exports.DeleteUserPermissionsBoundaryRequest$ = exports.DeleteSSHPublicKeyRequest$ = exports.DeleteSigningCertificateRequest$ = exports.DeleteServiceSpecificCredentialRequest$ = exports.DeleteServiceLinkedRoleResponse$ = void 0;
exports.ListEntitiesForPolicyRequest$ = exports.ListDelegationRequestsResponse$ = exports.ListDelegationRequestsRequest$ = exports.ListAttachedUserPoliciesResponse$ = exports.ListAttachedUserPoliciesRequest$ = exports.ListAttachedRolePoliciesResponse$ = exports.ListAttachedRolePoliciesRequest$ = exports.ListAttachedGroupPoliciesResponse$ = exports.ListAttachedGroupPoliciesRequest$ = exports.ListAccountAliasesResponse$ = exports.ListAccountAliasesRequest$ = exports.ListAccessKeysResponse$ = exports.ListAccessKeysRequest$ = exports.InstanceProfile$ = exports.GroupDetail$ = exports.Group$ = exports.GetUserResponse$ = exports.GetUserRequest$ = exports.GetUserPolicyResponse$ = exports.GetUserPolicyRequest$ = exports.GetSSHPublicKeyResponse$ = exports.GetSSHPublicKeyRequest$ = exports.GetServiceLinkedRoleDeletionStatusResponse$ = exports.GetServiceLinkedRoleDeletionStatusRequest$ = exports.GetServiceLastAccessedDetailsWithEntitiesResponse$ = exports.GetServiceLastAccessedDetailsWithEntitiesRequest$ = exports.GetServiceLastAccessedDetailsResponse$ = exports.GetServiceLastAccessedDetailsRequest$ = exports.GetServerCertificateResponse$ = exports.GetServerCertificateRequest$ = exports.GetSAMLProviderResponse$ = exports.GetSAMLProviderRequest$ = exports.GetRoleResponse$ = exports.GetRoleRequest$ = exports.GetRolePolicyResponse$ = exports.GetRolePolicyRequest$ = exports.GetPolicyVersionResponse$ = exports.GetPolicyVersionRequest$ = exports.GetPolicyResponse$ = exports.GetPolicyRequest$ = exports.GetOutboundWebIdentityFederationInfoResponse$ = exports.GetOrganizationsAccessReportResponse$ = exports.GetOrganizationsAccessReportRequest$ = exports.GetOpenIDConnectProviderResponse$ = exports.GetOpenIDConnectProviderRequest$ = exports.GetMFADeviceResponse$ = exports.GetMFADeviceRequest$ = exports.GetLoginProfileResponse$ = exports.GetLoginProfileRequest$ = exports.GetInstanceProfileResponse$ = void 0;
exports.ListSigningCertificatesResponse$ = exports.ListSigningCertificatesRequest$ = exports.ListServiceSpecificCredentialsResponse$ = exports.ListServiceSpecificCredentialsRequest$ = exports.ListServerCertificateTagsResponse$ = exports.ListServerCertificateTagsRequest$ = exports.ListServerCertificatesResponse$ = exports.ListServerCertificatesRequest$ = exports.ListSAMLProviderTagsResponse$ = exports.ListSAMLProviderTagsRequest$ = exports.ListSAMLProvidersResponse$ = exports.ListSAMLProvidersRequest$ = exports.ListRoleTagsResponse$ = exports.ListRoleTagsRequest$ = exports.ListRolesResponse$ = exports.ListRolesRequest$ = exports.ListRolePoliciesResponse$ = exports.ListRolePoliciesRequest$ = exports.ListPolicyVersionsResponse$ = exports.ListPolicyVersionsRequest$ = exports.ListPolicyTagsResponse$ = exports.ListPolicyTagsRequest$ = exports.ListPoliciesResponse$ = exports.ListPoliciesRequest$ = exports.ListPoliciesGrantingServiceAccessResponse$ = exports.ListPoliciesGrantingServiceAccessRequest$ = exports.ListPoliciesGrantingServiceAccessEntry$ = exports.ListOrganizationsFeaturesResponse$ = exports.ListOrganizationsFeaturesRequest$ = exports.ListOpenIDConnectProviderTagsResponse$ = exports.ListOpenIDConnectProviderTagsRequest$ = exports.ListOpenIDConnectProvidersResponse$ = exports.ListOpenIDConnectProvidersRequest$ = exports.ListMFADeviceTagsResponse$ = exports.ListMFADeviceTagsRequest$ = exports.ListMFADevicesResponse$ = exports.ListMFADevicesRequest$ = exports.ListInstanceProfileTagsResponse$ = exports.ListInstanceProfileTagsRequest$ = exports.ListInstanceProfilesResponse$ = exports.ListInstanceProfilesRequest$ = exports.ListInstanceProfilesForRoleResponse$ = exports.ListInstanceProfilesForRoleRequest$ = exports.ListGroupsResponse$ = exports.ListGroupsRequest$ = exports.ListGroupsForUserResponse$ = exports.ListGroupsForUserRequest$ = exports.ListGroupPoliciesResponse$ = exports.ListGroupPoliciesRequest$ = exports.ListEntitiesForPolicyResponse$ = void 0;
exports.ServiceSpecificCredential$ = exports.ServiceLastAccessed$ = exports.ServerCertificateMetadata$ = exports.ServerCertificate$ = exports.SendDelegationTokenRequest$ = exports.SAMLProviderListEntry$ = exports.SAMLPrivateKey$ = exports.RoleUsageType$ = exports.RoleLastUsed$ = exports.RoleDetail$ = exports.Role$ = exports.ResyncMFADeviceRequest$ = exports.ResourceSpecificResult$ = exports.ResetServiceSpecificCredentialResponse$ = exports.ResetServiceSpecificCredentialRequest$ = exports.RemoveUserFromGroupRequest$ = exports.RemoveRoleFromInstanceProfileRequest$ = exports.RemoveClientIDFromOpenIDConnectProviderRequest$ = exports.RejectDelegationRequestRequest$ = exports.PutUserPolicyRequest$ = exports.PutUserPermissionsBoundaryRequest$ = exports.PutRolePolicyRequest$ = exports.PutRolePermissionsBoundaryRequest$ = exports.PutGroupPolicyRequest$ = exports.Position$ = exports.PolicyVersion$ = exports.PolicyUser$ = exports.PolicyRole$ = exports.PolicyParameter$ = exports.PolicyGroup$ = exports.PolicyGrantingServiceAccess$ = exports.PolicyDetail$ = exports.Policy$ = exports.PermissionsBoundaryDecisionDetail$ = exports.PasswordPolicy$ = exports.OrganizationsDecisionDetail$ = exports.OpenIDConnectProviderListEntry$ = exports.MFADevice$ = exports.ManagedPolicyDetail$ = exports.LoginProfile$ = exports.ListVirtualMFADevicesResponse$ = exports.ListVirtualMFADevicesRequest$ = exports.ListUserTagsResponse$ = exports.ListUserTagsRequest$ = exports.ListUsersResponse$ = exports.ListUsersRequest$ = exports.ListUserPoliciesResponse$ = exports.ListUserPoliciesRequest$ = exports.ListSSHPublicKeysResponse$ = exports.ListSSHPublicKeysRequest$ = void 0;
exports.UploadSigningCertificateResponse$ = exports.UploadSigningCertificateRequest$ = exports.UploadServerCertificateResponse$ = exports.UploadServerCertificateRequest$ = exports.UpdateUserRequest$ = exports.UpdateSSHPublicKeyRequest$ = exports.UpdateSigningCertificateRequest$ = exports.UpdateServiceSpecificCredentialRequest$ = exports.UpdateServerCertificateRequest$ = exports.UpdateSAMLProviderResponse$ = exports.UpdateSAMLProviderRequest$ = exports.UpdateRoleResponse$ = exports.UpdateRoleRequest$ = exports.UpdateRoleDescriptionResponse$ = exports.UpdateRoleDescriptionRequest$ = exports.UpdateOpenIDConnectProviderThumbprintRequest$ = exports.UpdateLoginProfileRequest$ = exports.UpdateGroupRequest$ = exports.UpdateDelegationRequestRequest$ = exports.UpdateAssumeRolePolicyRequest$ = exports.UpdateAccountPasswordPolicyRequest$ = exports.UpdateAccessKeyRequest$ = exports.UntagUserRequest$ = exports.UntagServerCertificateRequest$ = exports.UntagSAMLProviderRequest$ = exports.UntagRoleRequest$ = exports.UntagPolicyRequest$ = exports.UntagOpenIDConnectProviderRequest$ = exports.UntagMFADeviceRequest$ = exports.UntagInstanceProfileRequest$ = exports.TrackedActionLastAccessed$ = exports.TagUserRequest$ = exports.TagServerCertificateRequest$ = exports.TagSAMLProviderRequest$ = exports.TagRoleRequest$ = exports.TagPolicyRequest$ = exports.TagOpenIDConnectProviderRequest$ = exports.TagMFADeviceRequest$ = exports.TagInstanceProfileRequest$ = exports.Tag$ = exports.Statement$ = exports.SSHPublicKeyMetadata$ = exports.SSHPublicKey$ = exports.SimulatePrincipalPolicyRequest$ = exports.SimulatePolicyResponse$ = exports.SimulateCustomPolicyRequest$ = exports.SigningCertificate$ = exports.SetSecurityTokenServicePreferencesRequest$ = exports.SetDefaultPolicyVersionRequest$ = exports.ServiceSpecificCredentialMetadata$ = void 0;
exports.DeleteUser$ = exports.DeleteSSHPublicKey$ = exports.DeleteSigningCertificate$ = exports.DeleteServiceSpecificCredential$ = exports.DeleteServiceLinkedRole$ = exports.DeleteServerCertificate$ = exports.DeleteSAMLProvider$ = exports.DeleteRolePolicy$ = exports.DeleteRolePermissionsBoundary$ = exports.DeleteRole$ = exports.DeletePolicyVersion$ = exports.DeletePolicy$ = exports.DeleteOpenIDConnectProvider$ = exports.DeleteLoginProfile$ = exports.DeleteInstanceProfile$ = exports.DeleteGroupPolicy$ = exports.DeleteGroup$ = exports.DeleteAccountPasswordPolicy$ = exports.DeleteAccountAlias$ = exports.DeleteAccessKey$ = exports.DeactivateMFADevice$ = exports.CreateVirtualMFADevice$ = exports.CreateUser$ = exports.CreateServiceSpecificCredential$ = exports.CreateServiceLinkedRole$ = exports.CreateSAMLProvider$ = exports.CreateRole$ = exports.CreatePolicyVersion$ = exports.CreatePolicy$ = exports.CreateOpenIDConnectProvider$ = exports.CreateLoginProfile$ = exports.CreateInstanceProfile$ = exports.CreateGroup$ = exports.CreateDelegationRequest$ = exports.CreateAccountAlias$ = exports.CreateAccessKey$ = exports.ChangePassword$ = exports.AttachUserPolicy$ = exports.AttachRolePolicy$ = exports.AttachGroupPolicy$ = exports.AssociateDelegationRequest$ = exports.AddUserToGroup$ = exports.AddRoleToInstanceProfile$ = exports.AddClientIDToOpenIDConnectProvider$ = exports.AcceptDelegationRequest$ = exports.VirtualMFADevice$ = exports.UserDetail$ = exports.User$ = exports.UploadSSHPublicKeyResponse$ = exports.UploadSSHPublicKeyRequest$ = void 0;
exports.ListAttachedUserPolicies$ = exports.ListAttachedRolePolicies$ = exports.ListAttachedGroupPolicies$ = exports.ListAccountAliases$ = exports.ListAccessKeys$ = exports.GetUserPolicy$ = exports.GetUser$ = exports.GetSSHPublicKey$ = exports.GetServiceLinkedRoleDeletionStatus$ = exports.GetServiceLastAccessedDetailsWithEntities$ = exports.GetServiceLastAccessedDetails$ = exports.GetServerCertificate$ = exports.GetSAMLProvider$ = exports.GetRolePolicy$ = exports.GetRole$ = exports.GetPolicyVersion$ = exports.GetPolicy$ = exports.GetOutboundWebIdentityFederationInfo$ = exports.GetOrganizationsAccessReport$ = exports.GetOpenIDConnectProvider$ = exports.GetMFADevice$ = exports.GetLoginProfile$ = exports.GetInstanceProfile$ = exports.GetHumanReadableSummary$ = exports.GetGroupPolicy$ = exports.GetGroup$ = exports.GetDelegationRequest$ = exports.GetCredentialReport$ = exports.GetContextKeysForPrincipalPolicy$ = exports.GetContextKeysForCustomPolicy$ = exports.GetAccountSummary$ = exports.GetAccountPasswordPolicy$ = exports.GetAccountAuthorizationDetails$ = exports.GetAccessKeyLastUsed$ = exports.GenerateServiceLastAccessedDetails$ = exports.GenerateOrganizationsAccessReport$ = exports.GenerateCredentialReport$ = exports.EnableOutboundWebIdentityFederation$ = exports.EnableOrganizationsRootSessions$ = exports.EnableOrganizationsRootCredentialsManagement$ = exports.EnableMFADevice$ = exports.DisableOutboundWebIdentityFederation$ = exports.DisableOrganizationsRootSessions$ = exports.DisableOrganizationsRootCredentialsManagement$ = exports.DetachUserPolicy$ = exports.DetachRolePolicy$ = exports.DetachGroupPolicy$ = exports.DeleteVirtualMFADevice$ = exports.DeleteUserPolicy$ = exports.DeleteUserPermissionsBoundary$ = void 0;
exports.TagOpenIDConnectProvider$ = exports.TagMFADevice$ = exports.TagInstanceProfile$ = exports.SimulatePrincipalPolicy$ = exports.SimulateCustomPolicy$ = exports.SetSecurityTokenServicePreferences$ = exports.SetDefaultPolicyVersion$ = exports.SendDelegationToken$ = exports.ResyncMFADevice$ = exports.ResetServiceSpecificCredential$ = exports.RemoveUserFromGroup$ = exports.RemoveRoleFromInstanceProfile$ = exports.RemoveClientIDFromOpenIDConnectProvider$ = exports.RejectDelegationRequest$ = exports.PutUserPolicy$ = exports.PutUserPermissionsBoundary$ = exports.PutRolePolicy$ = exports.PutRolePermissionsBoundary$ = exports.PutGroupPolicy$ = exports.ListVirtualMFADevices$ = exports.ListUserTags$ = exports.ListUsers$ = exports.ListUserPolicies$ = exports.ListSSHPublicKeys$ = exports.ListSigningCertificates$ = exports.ListServiceSpecificCredentials$ = exports.ListServerCertificateTags$ = exports.ListServerCertificates$ = exports.ListSAMLProviderTags$ = exports.ListSAMLProviders$ = exports.ListRoleTags$ = exports.ListRoles$ = exports.ListRolePolicies$ = exports.ListPolicyVersions$ = exports.ListPolicyTags$ = exports.ListPoliciesGrantingServiceAccess$ = exports.ListPolicies$ = exports.ListOrganizationsFeatures$ = exports.ListOpenIDConnectProviderTags$ = exports.ListOpenIDConnectProviders$ = exports.ListMFADeviceTags$ = exports.ListMFADevices$ = exports.ListInstanceProfileTags$ = exports.ListInstanceProfilesForRole$ = exports.ListInstanceProfiles$ = exports.ListGroupsForUser$ = exports.ListGroups$ = exports.ListGroupPolicies$ = exports.ListEntitiesForPolicy$ = exports.ListDelegationRequests$ = void 0;
exports.UploadSSHPublicKey$ = exports.UploadSigningCertificate$ = exports.UploadServerCertificate$ = exports.UpdateUser$ = exports.UpdateSSHPublicKey$ = exports.UpdateSigningCertificate$ = exports.UpdateServiceSpecificCredential$ = exports.UpdateServerCertificate$ = exports.UpdateSAMLProvider$ = exports.UpdateRoleDescription$ = exports.UpdateRole$ = exports.UpdateOpenIDConnectProviderThumbprint$ = exports.UpdateLoginProfile$ = exports.UpdateGroup$ = exports.UpdateDelegationRequest$ = exports.UpdateAssumeRolePolicy$ = exports.UpdateAccountPasswordPolicy$ = exports.UpdateAccessKey$ = exports.UntagUser$ = exports.UntagServerCertificate$ = exports.UntagSAMLProvider$ = exports.UntagRole$ = exports.UntagPolicy$ = exports.UntagOpenIDConnectProvider$ = exports.UntagMFADevice$ = exports.UntagInstanceProfile$ = exports.TagUser$ = exports.TagServerCertificate$ = exports.TagSAMLProvider$ = exports.TagRole$ = exports.TagPolicy$ = void 0;
const _A = "Arn";
const _AA = "AccountAlias";
const _AAc = "AccountAliases";
const _ABO = "AllowedByOrganizations";
const _ABPB = "AllowedByPermissionsBoundary";
const _AC = "AuthenticationCode1";
const _ACIDTOIDCP = "AddClientIDToOpenIDConnectProvider";
const _ACIDTOIDCPR = "AddClientIDToOpenIDConnectProviderRequest";
const _ACt = "AttachmentCount";
const _ACu = "AuthenticationCode2";
const _AD = "AccessDetail";
const _ADR = "AcceptDelegationRequest";
const _ADRR = "AcceptDelegationRequestRequest";
const _ADRRs = "AssociateDelegationRequestRequest";
const _ADRs = "AssociateDelegationRequest";
const _ADc = "AccessDetails";
const _AEM = "AssertionEncryptionMode";
const _AGP = "AttachGroupPolicy";
const _AGPR = "AttachGroupPolicyRequest";
const _AI = "ApproverId";
const _AK = "AccessKey";
const _AKI = "AccessKeyId";
const _AKLU = "AccessKeyLastUsed";
const _AKM = "AccessKeyMetadata";
const _AMP = "AttachedManagedPolicies";
const _AN = "ActionNames";
const _ANMODAE = "AccountNotManagementOrDelegatedAdministratorException";
const _ANc = "ActionName";
const _AP = "AttachedPolicy";
const _APB = "AttachedPermissionsBoundary";
const _APK = "AddPrivateKey";
const _APt = "AttachedPolicies";
const _ARP = "AttachRolePolicy";
const _ARPD = "AssumeRolePolicyDocument";
const _ARPR = "AttachRolePolicyRequest";
const _ARTIP = "AddRoleToInstanceProfile";
const _ARTIPR = "AddRoleToInstanceProfileRequest";
const _AS = "AssignmentStatus";
const _AU = "AllUsers";
const _AUP = "AttachUserPolicy";
const _AUPR = "AttachUserPolicyRequest";
const _AUTCP = "AllowUsersToChangePassword";
const _AUTG = "AddUserToGroup";
const _AUTGR = "AddUserToGroupRequest";
const _AWSSN = "AWSServiceName";
const _BD = "BootstrapDatum";
const _BSS = "Base32StringSeed";
const _C = "Code";
const _CA = "CallerArn";
const _CAA = "CreateAccountAlias";
const _CAAR = "CreateAccountAliasRequest";
const _CAD = "CredentialAgeDays";
const _CAK = "CreateAccessKey";
const _CAKR = "CreateAccessKeyRequest";
const _CAKRr = "CreateAccessKeyResponse";
const _CB = "CertificateBody";
const _CC = "CertificateChain";
const _CD = "CreateDate";
const _CDL = "ConsoleDeepLink";
const _CDR = "CreateDelegationRequest";
const _CDRR = "CreateDelegationRequestRequest";
const _CDRRr = "CreateDelegationRequestResponse";
const _CE = "ContextEntry";
const _CELT = "ContextEntryListType";
const _CEo = "ContextEntries";
const _CG = "CreateGroup";
const _CGR = "CreateGroupRequest";
const _CGRr = "CreateGroupResponse";
const _CI = "CertificateId";
const _CID = "ClientID";
const _CIDL = "ClientIDList";
const _CINMAE = "CallerIsNotManagementAccountException";
const _CIP = "CreateInstanceProfile";
const _CIPR = "CreateInstanceProfileRequest";
const _CIPRr = "CreateInstanceProfileResponse";
const _CKN = "ContextKeyName";
const _CKNo = "ContextKeyNames";
const _CKT = "ContextKeyType";
const _CKV = "ContextKeyValues";
const _CLP = "CreateLoginProfile";
const _CLPR = "CreateLoginProfileRequest";
const _CLPRr = "CreateLoginProfileResponse";
const _CME = "ConcurrentModificationException";
const _COIDCP = "CreateOpenIDConnectProvider";
const _COIDCPR = "CreateOpenIDConnectProviderRequest";
const _COIDCPRr = "CreateOpenIDConnectProviderResponse";
const _CP = "ChangePassword";
const _CPR = "ChangePasswordRequest";
const _CPRr = "CreatePolicyRequest";
const _CPRre = "CreatePolicyResponse";
const _CPV = "CreatePolicyVersion";
const _CPVR = "CreatePolicyVersionRequest";
const _CPVRr = "CreatePolicyVersionResponse";
const _CPr = "CreatePolicy";
const _CR = "CreateRole";
const _CREE = "CredentialReportExpiredException";
const _CRNPE = "CredentialReportNotPresentException";
const _CRNRE = "CredentialReportNotReadyException";
const _CRR = "CreateRoleRequest";
const _CRRr = "CreateRoleResponse";
const _CS = "CustomSuffix";
const _CSAMLP = "CreateSAMLProvider";
const _CSAMLPR = "CreateSAMLProviderRequest";
const _CSAMLPRr = "CreateSAMLProviderResponse";
const _CSLR = "CreateServiceLinkedRole";
const _CSLRR = "CreateServiceLinkedRoleRequest";
const _CSLRRr = "CreateServiceLinkedRoleResponse";
const _CSSC = "CreateServiceSpecificCredential";
const _CSSCR = "CreateServiceSpecificCredentialRequest";
const _CSSCRr = "CreateServiceSpecificCredentialResponse";
const _CU = "CreateUser";
const _CUR = "CreateUserRequest";
const _CURr = "CreateUserResponse";
const _CVMFAD = "CreateVirtualMFADevice";
const _CVMFADR = "CreateVirtualMFADeviceRequest";
const _CVMFADRr = "CreateVirtualMFADeviceResponse";
const _Ce = "Certifications";
const _Cer = "Certificates";
const _Cert = "Certificate";
const _Co = "Content";
const _Col = "Column";
const _D = "Description";
const _DAA = "DeleteAccountAlias";
const _DAAR = "DeleteAccountAliasRequest";
const _DAK = "DeleteAccessKey";
const _DAKR = "DeleteAccessKeyRequest";
const _DAPP = "DeleteAccountPasswordPolicy";
const _DCE = "DeleteConflictException";
const _DCEu = "DuplicateCertificateException";
const _DG = "DeleteGroup";
const _DGP = "DeleteGroupPolicy";
const _DGPR = "DeleteGroupPolicyRequest";
const _DGPRe = "DetachGroupPolicyRequest";
const _DGPe = "DetachGroupPolicy";
const _DGR = "DeleteGroupRequest";
const _DIP = "DeleteInstanceProfile";
const _DIPR = "DeleteInstanceProfileRequest";
const _DLP = "DeleteLoginProfile";
const _DLPR = "DeleteLoginProfileRequest";
const _DMFAD = "DeactivateMFADevice";
const _DMFADR = "DeactivateMFADeviceRequest";
const _DOIDCP = "DeleteOpenIDConnectProvider";
const _DOIDCPR = "DeleteOpenIDConnectProviderRequest";
const _DORCM = "DisableOrganizationsRootCredentialsManagement";
const _DORCMR = "DisableOrganizationsRootCredentialsManagementRequest";
const _DORCMRi = "DisableOrganizationsRootCredentialsManagementResponse";
const _DORS = "DisableOrganizationsRootSessions";
const _DORSR = "DisableOrganizationsRootSessionsRequest";
const _DORSRi = "DisableOrganizationsRootSessionsResponse";
const _DOWIF = "DisableOutboundWebIdentityFederation";
const _DP = "DelegationPermission";
const _DPC = "DelegationPermissionCheck";
const _DPR = "DeletePolicyRequest";
const _DPV = "DeletePolicyVersion";
const _DPVR = "DeletePolicyVersionRequest";
const _DPe = "DeletePolicy";
const _DR = "DelegationRequest";
const _DRI = "DelegationRequestId";
const _DRP = "DeleteRolePolicy";
const _DRPB = "DeleteRolePermissionsBoundary";
const _DRPBR = "DeleteRolePermissionsBoundaryRequest";
const _DRPR = "DeleteRolePolicyRequest";
const _DRPRe = "DetachRolePolicyRequest";
const _DRPe = "DetachRolePolicy";
const _DRR = "DeleteRoleRequest";
const _DRe = "DelegationRequests";
const _DRel = "DeleteRole";
const _DSAMLP = "DeleteSAMLProvider";
const _DSAMLPR = "DeleteSAMLProviderRequest";
const _DSC = "DeleteServerCertificate";
const _DSCR = "DeleteServerCertificateRequest";
const _DSCRe = "DeleteSigningCertificateRequest";
const _DSCe = "DeleteSigningCertificate";
const _DSLR = "DeleteServiceLinkedRole";
const _DSLRR = "DeleteServiceLinkedRoleRequest";
const _DSLRRe = "DeleteServiceLinkedRoleResponse";
const _DSSC = "DeleteServiceSpecificCredential";
const _DSSCR = "DeleteServiceSpecificCredentialRequest";
const _DSSHPK = "DeleteSSHPublicKey";
const _DSSHPKE = "DuplicateSSHPublicKeyException";
const _DSSHPKR = "DeleteSSHPublicKeyRequest";
const _DTFRT = "DeletionTaskFailureReasonType";
const _DTI = "DeletionTaskId";
const _DU = "DeleteUser";
const _DUP = "DeleteUserPolicy";
const _DUPB = "DeleteUserPermissionsBoundary";
const _DUPBR = "DeleteUserPermissionsBoundaryRequest";
const _DUPR = "DeleteUserPolicyRequest";
const _DUPRe = "DetachUserPolicyRequest";
const _DUPe = "DetachUserPolicy";
const _DUR = "DeleteUserRequest";
const _DVI = "DefaultVersionId";
const _DVMFAD = "DeleteVirtualMFADevice";
const _DVMFADR = "DeleteVirtualMFADeviceRequest";
const _Do = "Document";
const _E = "Error";
const _EA = "EntityArn";
const _EAEE = "EntityAlreadyExistsException";
const _EAN = "EvalActionName";
const _ED = "EntityDetails";
const _EDD = "EvalDecisionDetails";
const _EDL = "EntityDetailsList";
const _EDn = "EnableDate";
const _EDr = "ErrorDetails";
const _EDv = "EvalDecision";
const _EDx = "ExpirationDate";
const _EF = "EnabledFeatures";
const _EFn = "EntityFilter";
const _EI = "EntityInfo";
const _EMFAD = "EnableMFADevice";
const _EMFADR = "EnableMFADeviceRequest";
const _EN = "EntityName";
const _EORCM = "EnableOrganizationsRootCredentialsManagement";
const _EORCMR = "EnableOrganizationsRootCredentialsManagementRequest";
const _EORCMRn = "EnableOrganizationsRootCredentialsManagementResponse";
const _EORS = "EnableOrganizationsRootSessions";
const _EORSR = "EnableOrganizationsRootSessionsRequest";
const _EORSRn = "EnableOrganizationsRootSessionsResponse";
const _EOWIF = "EnableOutboundWebIdentityFederation";
const _EOWIFR = "EnableOutboundWebIdentityFederationResponse";
const _EP = "EntityPath";
const _EPn = "EndPosition";
const _EPx = "ExpirePasswords";
const _ER = "EvaluationResult";
const _ERD = "EvalResourceDecision";
const _ERLT = "EvaluationResultsListType";
const _ERN = "EvalResourceName";
const _ERv = "EvaluationResults";
const _ET = "ExpirationTime";
const _ETUE = "EntityTemporarilyUnmodifiableException";
const _ETn = "EntityType";
const _En = "Encoding";
const _Ex = "Expiration";
const _F = "Filter";
const _FDE = "FeatureDisabledException";
const _FEE = "FeatureEnabledException";
const _Fi = "Fingerprint";
const _G = "Group";
const _GAAD = "GetAccountAuthorizationDetails";
const _GAADR = "GetAccountAuthorizationDetailsRequest";
const _GAADRe = "GetAccountAuthorizationDetailsResponse";
const _GAKLU = "GetAccessKeyLastUsed";
const _GAKLUR = "GetAccessKeyLastUsedRequest";
const _GAKLURe = "GetAccessKeyLastUsedResponse";
const _GAPP = "GetAccountPasswordPolicy";
const _GAPPR = "GetAccountPasswordPolicyResponse";
const _GAS = "GetAccountSummary";
const _GASR = "GetAccountSummaryResponse";
const _GCKFCP = "GetContextKeysForCustomPolicy";
const _GCKFCPR = "GetContextKeysForCustomPolicyRequest";
const _GCKFPP = "GetContextKeysForPrincipalPolicy";
const _GCKFPPR = "GetContextKeysForPrincipalPolicyRequest";
const _GCKFPR = "GetContextKeysForPolicyResponse";
const _GCR = "GenerateCredentialReport";
const _GCRR = "GenerateCredentialReportResponse";
const _GCRRe = "GetCredentialReportResponse";
const _GCRe = "GetCredentialReport";
const _GD = "GroupDetail";
const _GDL = "GroupDetailList";
const _GDR = "GetDelegationRequest";
const _GDRR = "GetDelegationRequestRequest";
const _GDRRe = "GetDelegationRequestResponse";
const _GETV = "GlobalEndpointTokenVersion";
const _GG = "GetGroup";
const _GGP = "GetGroupPolicy";
const _GGPR = "GetGroupPolicyRequest";
const _GGPRe = "GetGroupPolicyResponse";
const _GGR = "GetGroupRequest";
const _GGRe = "GetGroupResponse";
const _GHRS = "GetHumanReadableSummary";
const _GHRSR = "GetHumanReadableSummaryRequest";
const _GHRSRe = "GetHumanReadableSummaryResponse";
const _GI = "GroupId";
const _GIP = "GetInstanceProfile";
const _GIPR = "GetInstanceProfileRequest";
const _GIPRe = "GetInstanceProfileResponse";
const _GL = "GroupList";
const _GLP = "GetLoginProfile";
const _GLPR = "GetLoginProfileRequest";
const _GLPRe = "GetLoginProfileResponse";
const _GMFAD = "GetMFADevice";
const _GMFADR = "GetMFADeviceRequest";
const _GMFADRe = "GetMFADeviceResponse";
const _GN = "GroupName";
const _GOAR = "GenerateOrganizationsAccessReport";
const _GOARR = "GenerateOrganizationsAccessReportRequest";
const _GOARRe = "GenerateOrganizationsAccessReportResponse";
const _GOARRet = "GetOrganizationsAccessReportRequest";
const _GOARRetr = "GetOrganizationsAccessReportResponse";
const _GOARe = "GetOrganizationsAccessReport";
const _GOIDCP = "GetOpenIDConnectProvider";
const _GOIDCPR = "GetOpenIDConnectProviderRequest";
const _GOIDCPRe = "GetOpenIDConnectProviderResponse";
const _GOWIFI = "GetOutboundWebIdentityFederationInfo";
const _GOWIFIR = "GetOutboundWebIdentityFederationInfoResponse";
const _GP = "GetPolicy";
const _GPL = "GroupPolicyList";
const _GPR = "GetPolicyRequest";
const _GPRe = "GetPolicyResponse";
const _GPV = "GetPolicyVersion";
const _GPVR = "GetPolicyVersionRequest";
const _GPVRe = "GetPolicyVersionResponse";
const _GR = "GetRole";
const _GRP = "GetRolePolicy";
const _GRPR = "GetRolePolicyRequest";
const _GRPRe = "GetRolePolicyResponse";
const _GRR = "GetRoleRequest";
const _GRRe = "GetRoleResponse";
const _GSAMLP = "GetSAMLProvider";
const _GSAMLPR = "GetSAMLProviderRequest";
const _GSAMLPRe = "GetSAMLProviderResponse";
const _GSC = "GetServerCertificate";
const _GSCR = "GetServerCertificateRequest";
const _GSCRe = "GetServerCertificateResponse";
const _GSLAD = "GenerateServiceLastAccessedDetails";
const _GSLADR = "GenerateServiceLastAccessedDetailsRequest";
const _GSLADRe = "GenerateServiceLastAccessedDetailsResponse";
const _GSLADRet = "GetServiceLastAccessedDetailsRequest";
const _GSLADRete = "GetServiceLastAccessedDetailsResponse";
const _GSLADWE = "GetServiceLastAccessedDetailsWithEntities";
const _GSLADWER = "GetServiceLastAccessedDetailsWithEntitiesRequest";
const _GSLADWERe = "GetServiceLastAccessedDetailsWithEntitiesResponse";
const _GSLADe = "GetServiceLastAccessedDetails";
const _GSLRDS = "GetServiceLinkedRoleDeletionStatus";
const _GSLRDSR = "GetServiceLinkedRoleDeletionStatusRequest";
const _GSLRDSRe = "GetServiceLinkedRoleDeletionStatusResponse";
const _GSSHPK = "GetSSHPublicKey";
const _GSSHPKR = "GetSSHPublicKeyRequest";
const _GSSHPKRe = "GetSSHPublicKeyResponse";
const _GT = "GeneratedTime";
const _GU = "GetUser";
const _GUP = "GetUserPolicy";
const _GUPR = "GetUserPolicyRequest";
const _GUPRe = "GetUserPolicyResponse";
const _GUR = "GetUserRequest";
const _GURe = "GetUserResponse";
const _Gr = "Granularity";
const _Gro = "Groups";
const _HE = "HardExpiry";
const _I = "Id";
const _IA = "IsAttachable";
const _IACE = "InvalidAuthenticationCodeException";
const _ICE = "InvalidCertificateException";
const _IDV = "IsDefaultVersion";
const _II = "IssuerIdentifier";
const _IIE = "InvalidInputException";
const _IP = "InstanceProfile";
const _IPI = "InstanceProfileId";
const _IPKE = "InvalidPublicKeyException";
const _IPL = "InstanceProfileList";
const _IPN = "InstanceProfileName";
const _IPn = "InstanceProfiles";
const _IT = "IsTruncated";
const _IUTE = "InvalidUserTypeException";
const _JCD = "JobCreationDate";
const _JCDo = "JobCompletionDate";
const _JI = "JobId";
const _JS = "JobStatus";
const _JT = "JobType";
const _JVE = "JwtVendingEnabled";
const _K = "Key";
const _KI = "KeyId";
const _KPME = "KeyPairMismatchException";
const _L = "Locale";
const _LA = "LastAuthenticated";
const _LAA = "ListAccountAliases";
const _LAAR = "ListAccountAliasesRequest";
const _LAARi = "ListAccountAliasesResponse";
const _LAE = "LastAuthenticatedEntity";
const _LAEa = "LastAccessedEntity";
const _LAGP = "ListAttachedGroupPolicies";
const _LAGPR = "ListAttachedGroupPoliciesRequest";
const _LAGPRi = "ListAttachedGroupPoliciesResponse";
const _LAK = "ListAccessKeys";
const _LAKR = "ListAccessKeysRequest";
const _LAKRi = "ListAccessKeysResponse";
const _LAR = "LastAuthenticatedRegion";
const _LARP = "ListAttachedRolePolicies";
const _LARPR = "ListAttachedRolePoliciesRequest";
const _LARPRi = "ListAttachedRolePoliciesResponse";
const _LARa = "LastAccessedRegion";
const _LAT = "LastAuthenticatedTime";
const _LATa = "LastAccessedTime";
const _LAUP = "ListAttachedUserPolicies";
const _LAUPR = "ListAttachedUserPoliciesRequest";
const _LAUPRi = "ListAttachedUserPoliciesResponse";
const _LDR = "ListDelegationRequests";
const _LDRR = "ListDelegationRequestsRequest";
const _LDRRi = "ListDelegationRequestsResponse";
const _LEE = "LimitExceededException";
const _LEFP = "ListEntitiesForPolicy";
const _LEFPR = "ListEntitiesForPolicyRequest";
const _LEFPRi = "ListEntitiesForPolicyResponse";
const _LG = "ListGroups";
const _LGFU = "ListGroupsForUser";
const _LGFUR = "ListGroupsForUserRequest";
const _LGFURi = "ListGroupsForUserResponse";
const _LGP = "ListGroupPolicies";
const _LGPR = "ListGroupPoliciesRequest";
const _LGPRi = "ListGroupPoliciesResponse";
const _LGR = "ListGroupsRequest";
const _LGRi = "ListGroupsResponse";
const _LIP = "ListInstanceProfiles";
const _LIPFR = "ListInstanceProfilesForRole";
const _LIPFRR = "ListInstanceProfilesForRoleRequest";
const _LIPFRRi = "ListInstanceProfilesForRoleResponse";
const _LIPR = "ListInstanceProfilesRequest";
const _LIPRi = "ListInstanceProfilesResponse";
const _LIPT = "ListInstanceProfileTags";
const _LIPTR = "ListInstanceProfileTagsRequest";
const _LIPTRi = "ListInstanceProfileTagsResponse";
const _LMFAD = "ListMFADevices";
const _LMFADR = "ListMFADevicesRequest";
const _LMFADRi = "ListMFADevicesResponse";
const _LMFADT = "ListMFADeviceTags";
const _LMFADTR = "ListMFADeviceTagsRequest";
const _LMFADTRi = "ListMFADeviceTagsResponse";
const _LOF = "ListOrganizationsFeatures";
const _LOFR = "ListOrganizationsFeaturesRequest";
const _LOFRi = "ListOrganizationsFeaturesResponse";
const _LOIDCP = "ListOpenIDConnectProviders";
const _LOIDCPR = "ListOpenIDConnectProvidersRequest";
const _LOIDCPRi = "ListOpenIDConnectProvidersResponse";
const _LOIDCPT = "ListOpenIDConnectProviderTags";
const _LOIDCPTR = "ListOpenIDConnectProviderTagsRequest";
const _LOIDCPTRi = "ListOpenIDConnectProviderTagsResponse";
const _LP = "LoginProfile";
const _LPGSA = "ListPoliciesGrantingServiceAccess";
const _LPGSAE = "ListPoliciesGrantingServiceAccessEntry";
const _LPGSAR = "ListPoliciesGrantingServiceAccessRequest";
const _LPGSARi = "ListPoliciesGrantingServiceAccessResponse";
const _LPR = "ListPoliciesRequest";
const _LPRi = "ListPoliciesResponse";
const _LPT = "ListPolicyTags";
const _LPTR = "ListPolicyTagsRequest";
const _LPTRi = "ListPolicyTagsResponse";
const _LPV = "ListPolicyVersions";
const _LPVR = "ListPolicyVersionsRequest";
const _LPVRi = "ListPolicyVersionsResponse";
const _LPi = "ListPolicies";
const _LR = "ListRoles";
const _LRP = "ListRolePolicies";
const _LRPR = "ListRolePoliciesRequest";
const _LRPRi = "ListRolePoliciesResponse";
const _LRR = "ListRolesRequest";
const _LRRi = "ListRolesResponse";
const _LRT = "ListRoleTags";
const _LRTR = "ListRoleTagsRequest";
const _LRTRi = "ListRoleTagsResponse";
const _LSAMLP = "ListSAMLProviders";
const _LSAMLPR = "ListSAMLProvidersRequest";
const _LSAMLPRi = "ListSAMLProvidersResponse";
const _LSAMLPT = "ListSAMLProviderTags";
const _LSAMLPTR = "ListSAMLProviderTagsRequest";
const _LSAMLPTRi = "ListSAMLProviderTagsResponse";
const _LSC = "ListServerCertificates";
const _LSCR = "ListServerCertificatesRequest";
const _LSCRi = "ListServerCertificatesResponse";
const _LSCRis = "ListSigningCertificatesRequest";
const _LSCRist = "ListSigningCertificatesResponse";
const _LSCT = "ListServerCertificateTags";
const _LSCTR = "ListServerCertificateTagsRequest";
const _LSCTRi = "ListServerCertificateTagsResponse";
const _LSCi = "ListSigningCertificates";
const _LSSC = "ListServiceSpecificCredentials";
const _LSSCR = "ListServiceSpecificCredentialsRequest";
const _LSSCRi = "ListServiceSpecificCredentialsResponse";
const _LSSHPK = "ListSSHPublicKeys";
const _LSSHPKR = "ListSSHPublicKeysRequest";
const _LSSHPKRi = "ListSSHPublicKeysResponse";
const _LU = "ListUsers";
const _LUD = "LastUsedDate";
const _LUP = "ListUserPolicies";
const _LUPR = "ListUserPoliciesRequest";
const _LUPRi = "ListUserPoliciesResponse";
const _LUR = "ListUsersRequest";
const _LURi = "ListUsersResponse";
const _LUT = "ListUserTags";
const _LUTR = "ListUserTagsRequest";
const _LUTRi = "ListUserTagsResponse";
const _LVMFAD = "ListVirtualMFADevices";
const _LVMFADR = "ListVirtualMFADevicesRequest";
const _LVMFADRi = "ListVirtualMFADevicesResponse";
const _Li = "Line";
const _M = "Message";
const _MCE = "MalformedCertificateException";
const _MCV = "MissingContextValues";
const _MFAD = "MFADevices";
const _MFADe = "MFADevice";
const _MI = "MaxItems";
const _MPA = "MaxPasswordAge";
const _MPD = "ManagedPolicyDetail";
const _MPDE = "MalformedPolicyDocumentException";
const _MPDLT = "ManagedPolicyDetailListType";
const _MPL = "MinimumPasswordLength";
const _MS = "MatchedStatements";
const _MSD = "MaxSessionDuration";
const _Ma = "Marker";
const _N = "Name";
const _NC = "NotificationChannel";
const _NGN = "NewGroupName";
const _NOSA = "NumberOfServicesAccessible";
const _NOSNA = "NumberOfServicesNotAccessed";
const _NP = "NewPassword";
const _NPe = "NewPath";
const _NSCN = "NewServerCertificateName";
const _NSEE = "NoSuchEntityException";
const _NUN = "NewUserName";
const _No = "Notes";
const _OA = "OnlyAttached";
const _OAI = "OwnerAccountId";
const _ODD = "OrganizationsDecisionDetail";
const _OI = "OwnerId";
const _OIDCPA = "OpenIDConnectProviderArn";
const _OIDCPL = "OpenIDConnectProviderList";
const _OIDCPLE = "OpenIDConnectProviderListEntry";
const _OIDCPLT = "OpenIDConnectProviderListType";
const _OIICEE = "OpenIdIdpCommunicationErrorException";
const _OIr = "OrganizationId";
const _ONFE = "OrganizationNotFoundException";
const _ONIAFME = "OrganizationNotInAllFeaturesModeException";
const _OP = "OldPassword";
const _OPI = "OrganizationsPolicyId";
const _OSBO = "OnlySendByOwner";
const _P = "Permissions";
const _PA = "PolicyArn";
const _PB = "PermissionsBoundary";
const _PBA = "PermissionsBoundaryArn";
const _PBDD = "PermissionsBoundaryDecisionDetail";
const _PBPIL = "PermissionsBoundaryPolicyInputList";
const _PBT = "PermissionsBoundaryType";
const _PBUC = "PermissionsBoundaryUsageCount";
const _PCR = "PermissionCheckResult";
const _PCS = "PermissionCheckStatus";
const _PD = "PolicyDocument";
const _PDo = "PolicyDetail";
const _PEE = "PolicyEvaluationException";
const _PG = "PolicyGroups";
const _PGLT = "PolicyGroupListType";
const _PGP = "PutGroupPolicy";
const _PGPR = "PutGroupPolicyRequest";
const _PGSA = "PoliciesGrantingServiceAccess";
const _PGSAo = "PolicyGrantingServiceAccess";
const _PGo = "PolicyGroup";
const _PI = "PolicyId";
const _PIL = "PolicyInputList";
const _PK = "PrivateKey";
const _PKL = "PrivateKeyList";
const _PLU = "PasswordLastUsed";
const _PN = "PolicyName";
const _PNAE = "PolicyNotAttachableException";
const _PNo = "PolicyNames";
const _PP = "PermissionPolicy";
const _PPVE = "PasswordPolicyViolationException";
const _PPa = "PasswordPolicy";
const _PPat = "PathPrefix";
const _PPo = "PolicyParameter";
const _PR = "PolicyRoles";
const _PRLT = "PolicyRoleListType";
const _PRP = "PasswordReusePrevention";
const _PRPB = "PutRolePermissionsBoundary";
const _PRPBR = "PutRolePermissionsBoundaryRequest";
const _PRPR = "PutRolePolicyRequest";
const _PRPu = "PutRolePolicy";
const _PRR = "PasswordResetRequired";
const _PRo = "PolicyRole";
const _PSA = "PolicySourceArn";
const _PT = "PolicyType";
const _PTA = "PolicyTemplateArn";
const _PU = "PolicyUsers";
const _PUF = "PolicyUsageFilter";
const _PULT = "PolicyUserListType";
const _PUP = "PutUserPolicy";
const _PUPB = "PutUserPermissionsBoundary";
const _PUPBR = "PutUserPermissionsBoundaryRequest";
const _PUPR = "PutUserPolicyRequest";
const _PUo = "PolicyUser";
const _PV = "PolicyVersion";
const _PVL = "PolicyVersionList";
const _Pa = "Path";
const _Par = "Parameters";
const _Pas = "Password";
const _Po = "Policy";
const _Pol = "Policies";
const _Pos = "Position";
const _QRCPNG = "QRCodePNG";
const _R = "Region";
const _RA = "ResourceArns";
const _RCIDFOIDCP = "RemoveClientIDFromOpenIDConnectProvider";
const _RCIDFOIDCPR = "RemoveClientIDFromOpenIDConnectProviderRequest";
const _RD = "RoleDetail";
const _RDL = "RoleDetailList";
const _RDR = "RejectDelegationRequest";
const _RDRR = "RejectDelegationRequestRequest";
const _RF = "ReportFormat";
const _RGLEE = "ReportGenerationLimitExceededException";
const _RHO = "ResourceHandlingOption";
const _RI = "RequestorId";
const _RIo = "RoleId";
const _RLC = "RequireLowercaseCharacters";
const _RLU = "RoleLastUsed";
const _RM = "RequestMessage";
const _RMFAD = "ResyncMFADevice";
const _RMFADR = "ResyncMFADeviceRequest";
const _RN = "RoleName";
const _RNe = "RequestorName";
const _RNeq = "RequireNumbers";
const _RO = "ResourceOwner";
const _RP = "ResourcePolicy";
const _RPK = "RemovePrivateKey";
const _RPL = "RolePolicyList";
const _RPRA = "RolePermissionRestrictionArns";
const _RR = "RejectionReason";
const _RRFIP = "RemoveRoleFromInstanceProfile";
const _RRFIPR = "RemoveRoleFromInstanceProfileRequest";
const _RS = "RequireSymbols";
const _RSR = "ResourceSpecificResults";
const _RSRLT = "ResourceSpecificResultListType";
const _RSRe = "ResourceSpecificResult";
const _RSSC = "ResetServiceSpecificCredential";
const _RSSCR = "ResetServiceSpecificCredentialRequest";
const _RSSCRe = "ResetServiceSpecificCredentialResponse";
const _RU = "RedirectUrl";
const _RUC = "RequireUppercaseCharacters";
const _RUFG = "RemoveUserFromGroup";
const _RUFGR = "RemoveUserFromGroupRequest";
const _RUL = "RoleUsageList";
const _RULT = "RoleUsageListType";
const _RUT = "RoleUsageType";
const _RWI = "RequestorWorkflowId";
const _Re = "Reason";
const _Res = "Resources";
const _Ro = "Role";
const _Rol = "Roles";
const _S = "Status";
const _SAD = "SetAsDefault";
const _SAK = "SecretAccessKey";
const _SAMLMD = "SAMLMetadataDocument";
const _SAMLPA = "SAMLProviderArn";
const _SAMLPK = "SAMLPrivateKey";
const _SAMLPL = "SAMLProviderList";
const _SAMLPLE = "SAMLProviderListEntry";
const _SAMLPLT = "SAMLProviderListType";
const _SAMLPUUID = "SAMLProviderUUID";
const _SANEE = "ServiceAccessNotEnabledException";
const _SC = "SummaryContent";
const _SCA = "ServiceCredentialAlias";
const _SCI = "ServerCertificateId";
const _SCM = "ServerCertificateMetadata";
const _SCML = "ServerCertificateMetadataList";
const _SCN = "ServerCertificateName";
const _SCP = "SimulateCustomPolicy";
const _SCPR = "SimulateCustomPolicyRequest";
const _SCS = "ServiceCredentialSecret";
const _SCe = "ServerCertificate";
const _SCi = "SigningCertificate";
const _SD = "SessionDuration";
const _SDPV = "SetDefaultPolicyVersion";
const _SDPVR = "SetDefaultPolicyVersionRequest";
const _SDT = "SendDelegationToken";
const _SDTR = "SendDelegationTokenRequest";
const _SFE = "ServiceFailureException";
const _SK = "SortKey";
const _SLA = "ServicesLastAccessed";
const _SLAe = "ServiceLastAccessed";
const _SLT = "StatementListType";
const _SM = "SummaryMap";
const _SN = "ServiceName";
const _SNSE = "ServiceNotSupportedException";
const _SNe = "ServiceNamespace";
const _SNer = "SerialNumber";
const _SNerv = "ServiceNamespaces";
const _SP = "ServicePassword";
const _SPI = "SourcePolicyId";
const _SPP = "SimulatePrincipalPolicy";
const _SPPR = "SimulatePrincipalPolicyRequest";
const _SPR = "SimulatePolicyResponse";
const _SPT = "SourcePolicyType";
const _SPt = "StartPosition";
const _SS = "SummaryState";
const _SSC = "ServiceSpecificCredential";
const _SSCI = "ServiceSpecificCredentialId";
const _SSCLT = "ServiceSpecificCredentialsListType";
const _SSCM = "ServiceSpecificCredentialMetadata";
const _SSCe = "ServiceSpecificCredentials";
const _SSHPK = "SSHPublicKey";
const _SSHPKB = "SSHPublicKeyBody";
const _SSHPKI = "SSHPublicKeyId";
const _SSHPKLT = "SSHPublicKeyListType";
const _SSHPKM = "SSHPublicKeyMetadata";
const _SSHPKu = "SSHPublicKeys";
const _SSTSP = "SetSecurityTokenServicePreferences";
const _SSTSPR = "SetSecurityTokenServicePreferencesRequest";
const _SUN = "ServiceUserName";
const _Sc = "Scope";
const _St = "State";
const _Sta = "Statement";
const _T = "Tags";
const _TAE = "TotalAuthenticatedEntities";
const _TALA = "TrackedActionsLastAccessed";
const _TALAr = "TrackedActionLastAccessed";
const _TIP = "TagInstanceProfile";
const _TIPR = "TagInstanceProfileRequest";
const _TK = "TagKeys";
const _TL = "ThumbprintList";
const _TMFAD = "TagMFADevice";
const _TMFADR = "TagMFADeviceRequest";
const _TOIDCP = "TagOpenIDConnectProvider";
const _TOIDCPR = "TagOpenIDConnectProviderRequest";
const _TP = "TagPolicy";
const _TPR = "TagPolicyRequest";
const _TR = "TagRole";
const _TRR = "TagRoleRequest";
const _TSAMLP = "TagSAMLProvider";
const _TSAMLPR = "TagSAMLProviderRequest";
const _TSC = "TagServerCertificate";
const _TSCR = "TagServerCertificateRequest";
const _TU = "TagUser";
const _TUR = "TagUserRequest";
const _Ta = "Tag";
const _Ti = "Timestamp";
const _Ty = "Type";
const _U = "Url";
const _UAK = "UpdateAccessKey";
const _UAKR = "UpdateAccessKeyRequest";
const _UAPP = "UpdateAccountPasswordPolicy";
const _UAPPR = "UpdateAccountPasswordPolicyRequest";
const _UARP = "UpdateAssumeRolePolicy";
const _UARPR = "UpdateAssumeRolePolicyRequest";
const _UD = "UpdateDate";
const _UDL = "UserDetailList";
const _UDR = "UpdateDelegationRequest";
const _UDRR = "UpdateDelegationRequestRequest";
const _UDp = "UploadDate";
const _UDs = "UserDetail";
const _UEE = "UnmodifiableEntityException";
const _UG = "UpdateGroup";
const _UGR = "UpdateGroupRequest";
const _UI = "UserId";
const _UIP = "UntagInstanceProfile";
const _UIPR = "UntagInstanceProfileRequest";
const _ULP = "UpdateLoginProfile";
const _ULPR = "UpdateLoginProfileRequest";
const _UMFAD = "UntagMFADevice";
const _UMFADR = "UntagMFADeviceRequest";
const _UN = "UserName";
const _UOIDCP = "UntagOpenIDConnectProvider";
const _UOIDCPR = "UntagOpenIDConnectProviderRequest";
const _UOIDCPT = "UpdateOpenIDConnectProviderThumbprint";
const _UOIDCPTR = "UpdateOpenIDConnectProviderThumbprintRequest";
const _UP = "UntagPolicy";
const _UPKEE = "UnrecognizedPublicKeyEncodingException";
const _UPL = "UserPolicyList";
const _UPR = "UntagPolicyRequest";
const _UR = "UntagRole";
const _URD = "UpdateRoleDescription";
const _URDR = "UpdateRoleDescriptionRequest";
const _URDRp = "UpdateRoleDescriptionResponse";
const _URR = "UntagRoleRequest";
const _URRp = "UpdateRoleRequest";
const _URRpd = "UpdateRoleResponse";
const _URp = "UpdateRole";
const _USAMLP = "UntagSAMLProvider";
const _USAMLPR = "UntagSAMLProviderRequest";
const _USAMLPRp = "UpdateSAMLProviderRequest";
const _USAMLPRpd = "UpdateSAMLProviderResponse";
const _USAMLPp = "UpdateSAMLProvider";
const _USC = "UntagServerCertificate";
const _USCR = "UntagServerCertificateRequest";
const _USCRp = "UpdateServerCertificateRequest";
const _USCRpd = "UpdateSigningCertificateRequest";
const _USCRpl = "UploadServerCertificateRequest";
const _USCRplo = "UploadServerCertificateResponse";
const _USCRploa = "UploadSigningCertificateRequest";
const _USCRpload = "UploadSigningCertificateResponse";
const _USCp = "UpdateServerCertificate";
const _USCpd = "UpdateSigningCertificate";
const _USCpl = "UploadServerCertificate";
const _USCplo = "UploadSigningCertificate";
const _USSC = "UpdateServiceSpecificCredential";
const _USSCR = "UpdateServiceSpecificCredentialRequest";
const _USSHPK = "UpdateSSHPublicKey";
const _USSHPKR = "UpdateSSHPublicKeyRequest";
const _USSHPKRp = "UploadSSHPublicKeyRequest";
const _USSHPKRpl = "UploadSSHPublicKeyResponse";
const _USSHPKp = "UploadSSHPublicKey";
const _UT = "UpdatedTime";
const _UU = "UntagUser";
const _UUR = "UntagUserRequest";
const _UURp = "UpdateUserRequest";
const _UUp = "UpdateUser";
const _Us = "User";
const _Use = "Users";
const _V = "Versions";
const _VI = "VersionId";
const _VMFAD = "VirtualMFADevice";
const _VMFADN = "VirtualMFADeviceName";
const _VMFADi = "VirtualMFADevices";
const _VU = "ValidUntil";
const _Va = "Values";
const _Val = "Value";
const _aKMLT = "accessKeyMetadataListType";
const _aKST = "accessKeySecretType";
const _aPLT = "attachedPoliciesListType";
const _aQE = "awsQueryError";
const _c = "client";
const _cLT = "certificateListType";
const _dRLT = "delegationRequestsListType";
const _e = "error";
const _eDLT = "entityDetailsListType";
const _gDLT = "groupDetailListType";
const _gLT = "groupListType";
const _hE = "httpError";
const _iPLT = "instanceProfileListType";
const _iT = "isTruncated";
const _lPGSARLT = "listPolicyGrantingServiceAccessResponseListType";
const _m = "message";
const _mDLT = "mfaDeviceListType";
const _pDLT = "policyDetailListType";
const _pDVLT = "policyDocumentVersionListType";
const _pGSALT = "policyGrantingServiceAccessListType";
const _pKL = "privateKeyList";
const _pKT = "privateKeyType";
const _pLT = "policyListType";
const _pPLT = "policyParameterListType";
const _pT = "passwordType";
const _rDLT = "roleDetailListType";
const _rLT = "roleListType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.iam";
const _sCMLT = "serverCertificateMetadataListType";
const _sCS = "serviceCredentialSecret";
const _sP = "servicePassword";
const _se = "server";
const _tLT = "tagListType";
const _uDLT = "userDetailListType";
const _uLT = "userListType";
const _vMFADLT = "virtualMFADeviceListType";
const n0 = "com.amazonaws.iam";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const IAMServiceException_1 = require("../models/IAMServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.IAMServiceException$ = [-3, _s, "IAMServiceException", 0, [], []];
_s_registry.registerError(exports.IAMServiceException$, IAMServiceException_1.IAMServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.AccountNotManagementOrDelegatedAdministratorException$ = [-3, n0, _ANMODAE,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.AccountNotManagementOrDelegatedAdministratorException$, errors_1.AccountNotManagementOrDelegatedAdministratorException);
exports.CallerIsNotManagementAccountException$ = [-3, n0, _CINMAE,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.CallerIsNotManagementAccountException$, errors_1.CallerIsNotManagementAccountException);
exports.ConcurrentModificationException$ = [-3, n0, _CME,
    { [_aQE]: [`ConcurrentModification`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.ConcurrentModificationException$, errors_1.ConcurrentModificationException);
exports.CredentialReportExpiredException$ = [-3, n0, _CREE,
    { [_aQE]: [`ReportExpired`, 410], [_e]: _c, [_hE]: 410 },
    [_m],
    [0]
];
n0_registry.registerError(exports.CredentialReportExpiredException$, errors_1.CredentialReportExpiredException);
exports.CredentialReportNotPresentException$ = [-3, n0, _CRNPE,
    { [_aQE]: [`ReportNotPresent`, 410], [_e]: _c, [_hE]: 410 },
    [_m],
    [0]
];
n0_registry.registerError(exports.CredentialReportNotPresentException$, errors_1.CredentialReportNotPresentException);
exports.CredentialReportNotReadyException$ = [-3, n0, _CRNRE,
    { [_aQE]: [`ReportInProgress`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.CredentialReportNotReadyException$, errors_1.CredentialReportNotReadyException);
exports.DeleteConflictException$ = [-3, n0, _DCE,
    { [_aQE]: [`DeleteConflict`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.DeleteConflictException$, errors_1.DeleteConflictException);
exports.DuplicateCertificateException$ = [-3, n0, _DCEu,
    { [_aQE]: [`DuplicateCertificate`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.DuplicateCertificateException$, errors_1.DuplicateCertificateException);
exports.DuplicateSSHPublicKeyException$ = [-3, n0, _DSSHPKE,
    { [_aQE]: [`DuplicateSSHPublicKey`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.DuplicateSSHPublicKeyException$, errors_1.DuplicateSSHPublicKeyException);
exports.EntityAlreadyExistsException$ = [-3, n0, _EAEE,
    { [_aQE]: [`EntityAlreadyExists`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.EntityAlreadyExistsException$, errors_1.EntityAlreadyExistsException);
exports.EntityTemporarilyUnmodifiableException$ = [-3, n0, _ETUE,
    { [_aQE]: [`EntityTemporarilyUnmodifiable`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.EntityTemporarilyUnmodifiableException$, errors_1.EntityTemporarilyUnmodifiableException);
exports.FeatureDisabledException$ = [-3, n0, _FDE,
    { [_aQE]: [`FeatureDisabled`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.FeatureDisabledException$, errors_1.FeatureDisabledException);
exports.FeatureEnabledException$ = [-3, n0, _FEE,
    { [_aQE]: [`FeatureEnabled`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.FeatureEnabledException$, errors_1.FeatureEnabledException);
exports.InvalidAuthenticationCodeException$ = [-3, n0, _IACE,
    { [_aQE]: [`InvalidAuthenticationCode`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidAuthenticationCodeException$, errors_1.InvalidAuthenticationCodeException);
exports.InvalidCertificateException$ = [-3, n0, _ICE,
    { [_aQE]: [`InvalidCertificate`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidCertificateException$, errors_1.InvalidCertificateException);
exports.InvalidInputException$ = [-3, n0, _IIE,
    { [_aQE]: [`InvalidInput`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidInputException$, errors_1.InvalidInputException);
exports.InvalidPublicKeyException$ = [-3, n0, _IPKE,
    { [_aQE]: [`InvalidPublicKey`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidPublicKeyException$, errors_1.InvalidPublicKeyException);
exports.InvalidUserTypeException$ = [-3, n0, _IUTE,
    { [_aQE]: [`InvalidUserType`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidUserTypeException$, errors_1.InvalidUserTypeException);
exports.KeyPairMismatchException$ = [-3, n0, _KPME,
    { [_aQE]: [`KeyPairMismatch`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.KeyPairMismatchException$, errors_1.KeyPairMismatchException);
exports.LimitExceededException$ = [-3, n0, _LEE,
    { [_aQE]: [`LimitExceeded`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.LimitExceededException$, errors_1.LimitExceededException);
exports.MalformedCertificateException$ = [-3, n0, _MCE,
    { [_aQE]: [`MalformedCertificate`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.MalformedCertificateException$, errors_1.MalformedCertificateException);
exports.MalformedPolicyDocumentException$ = [-3, n0, _MPDE,
    { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.MalformedPolicyDocumentException$, errors_1.MalformedPolicyDocumentException);
exports.NoSuchEntityException$ = [-3, n0, _NSEE,
    { [_aQE]: [`NoSuchEntity`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.NoSuchEntityException$, errors_1.NoSuchEntityException);
exports.OpenIdIdpCommunicationErrorException$ = [-3, n0, _OIICEE,
    { [_aQE]: [`OpenIdIdpCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.OpenIdIdpCommunicationErrorException$, errors_1.OpenIdIdpCommunicationErrorException);
exports.OrganizationNotFoundException$ = [-3, n0, _ONFE,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.OrganizationNotFoundException$, errors_1.OrganizationNotFoundException);
exports.OrganizationNotInAllFeaturesModeException$ = [-3, n0, _ONIAFME,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.OrganizationNotInAllFeaturesModeException$, errors_1.OrganizationNotInAllFeaturesModeException);
exports.PasswordPolicyViolationException$ = [-3, n0, _PPVE,
    { [_aQE]: [`PasswordPolicyViolation`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.PasswordPolicyViolationException$, errors_1.PasswordPolicyViolationException);
exports.PolicyEvaluationException$ = [-3, n0, _PEE,
    { [_aQE]: [`PolicyEvaluation`, 500], [_e]: _se, [_hE]: 500 },
    [_m],
    [0]
];
n0_registry.registerError(exports.PolicyEvaluationException$, errors_1.PolicyEvaluationException);
exports.PolicyNotAttachableException$ = [-3, n0, _PNAE,
    { [_aQE]: [`PolicyNotAttachable`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.PolicyNotAttachableException$, errors_1.PolicyNotAttachableException);
exports.ReportGenerationLimitExceededException$ = [-3, n0, _RGLEE,
    { [_aQE]: [`ReportGenerationLimitExceeded`, 409], [_e]: _c, [_hE]: 409 },
    [_m],
    [0]
];
n0_registry.registerError(exports.ReportGenerationLimitExceededException$, errors_1.ReportGenerationLimitExceededException);
exports.ServiceAccessNotEnabledException$ = [-3, n0, _SANEE,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.ServiceAccessNotEnabledException$, errors_1.ServiceAccessNotEnabledException);
exports.ServiceFailureException$ = [-3, n0, _SFE,
    { [_aQE]: [`ServiceFailure`, 500], [_e]: _se, [_hE]: 500 },
    [_m],
    [0]
];
n0_registry.registerError(exports.ServiceFailureException$, errors_1.ServiceFailureException);
exports.ServiceNotSupportedException$ = [-3, n0, _SNSE,
    { [_aQE]: [`NotSupportedService`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.ServiceNotSupportedException$, errors_1.ServiceNotSupportedException);
exports.UnmodifiableEntityException$ = [-3, n0, _UEE,
    { [_aQE]: [`UnmodifiableEntity`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.UnmodifiableEntityException$, errors_1.UnmodifiableEntityException);
exports.UnrecognizedPublicKeyEncodingException$ = [-3, n0, _UPKEE,
    { [_aQE]: [`UnrecognizedPublicKeyEncoding`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.UnrecognizedPublicKeyEncodingException$, errors_1.UnrecognizedPublicKeyEncodingException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
var accessKeySecretType = [0, n0, _aKST, 8, 0];
var BootstrapDatum = [0, n0, _BD, 8, 21];
var passwordType = [0, n0, _pT, 8, 0];
var privateKeyType = [0, n0, _pKT, 8, 0];
var serviceCredentialSecret = [0, n0, _sCS, 8, 0];
var servicePassword = [0, n0, _sP, 8, 0];
exports.AcceptDelegationRequestRequest$ = [3, n0, _ADRR,
    0,
    [_DRI],
    [0], 1
];
exports.AccessDetail$ = [3, n0, _AD,
    0,
    [_SN, _SNe, _R, _EP, _LAT, _TAE],
    [0, 0, 0, 0, 4, 1], 2
];
exports.AccessKey$ = [3, n0, _AK,
    0,
    [_UN, _AKI, _S, _SAK, _CD],
    [0, 0, 0, [() => accessKeySecretType, 0], 4], 4
];
exports.AccessKeyLastUsed$ = [3, n0, _AKLU,
    0,
    [_SN, _R, _LUD],
    [0, 0, 4], 2
];
exports.AccessKeyMetadata$ = [3, n0, _AKM,
    0,
    [_UN, _AKI, _S, _CD],
    [0, 0, 0, 4]
];
exports.AddClientIDToOpenIDConnectProviderRequest$ = [3, n0, _ACIDTOIDCPR,
    0,
    [_OIDCPA, _CID],
    [0, 0], 2
];
exports.AddRoleToInstanceProfileRequest$ = [3, n0, _ARTIPR,
    0,
    [_IPN, _RN],
    [0, 0], 2
];
exports.AddUserToGroupRequest$ = [3, n0, _AUTGR,
    0,
    [_GN, _UN],
    [0, 0], 2
];
exports.AssociateDelegationRequestRequest$ = [3, n0, _ADRRs,
    0,
    [_DRI],
    [0], 1
];
exports.AttachedPermissionsBoundary$ = [3, n0, _APB,
    0,
    [_PBT, _PBA],
    [0, 0]
];
exports.AttachedPolicy$ = [3, n0, _AP,
    0,
    [_PN, _PA],
    [0, 0]
];
exports.AttachGroupPolicyRequest$ = [3, n0, _AGPR,
    0,
    [_GN, _PA],
    [0, 0], 2
];
exports.AttachRolePolicyRequest$ = [3, n0, _ARPR,
    0,
    [_RN, _PA],
    [0, 0], 2
];
exports.AttachUserPolicyRequest$ = [3, n0, _AUPR,
    0,
    [_UN, _PA],
    [0, 0], 2
];
exports.ChangePasswordRequest$ = [3, n0, _CPR,
    0,
    [_OP, _NP],
    [[() => passwordType, 0], [() => passwordType, 0]], 2
];
exports.ContextEntry$ = [3, n0, _CE,
    0,
    [_CKN, _CKV, _CKT],
    [0, 64 | 0, 0]
];
exports.CreateAccessKeyRequest$ = [3, n0, _CAKR,
    0,
    [_UN],
    [0]
];
exports.CreateAccessKeyResponse$ = [3, n0, _CAKRr,
    0,
    [_AK],
    [[() => exports.AccessKey$, 0]], 1
];
exports.CreateAccountAliasRequest$ = [3, n0, _CAAR,
    0,
    [_AA],
    [0], 1
];
exports.CreateDelegationRequestRequest$ = [3, n0, _CDRR,
    0,
    [_D, _P, _RWI, _NC, _SD, _OAI, _RM, _RU, _OSBO],
    [0, () => exports.DelegationPermission$, 0, 0, 1, 0, 0, 0, 2], 5
];
exports.CreateDelegationRequestResponse$ = [3, n0, _CDRRr,
    0,
    [_CDL, _DRI],
    [0, 0]
];
exports.CreateGroupRequest$ = [3, n0, _CGR,
    0,
    [_GN, _Pa],
    [0, 0], 1
];
exports.CreateGroupResponse$ = [3, n0, _CGRr,
    0,
    [_G],
    [() => exports.Group$], 1
];
exports.CreateInstanceProfileRequest$ = [3, n0, _CIPR,
    0,
    [_IPN, _Pa, _T],
    [0, 0, () => tagListType], 1
];
exports.CreateInstanceProfileResponse$ = [3, n0, _CIPRr,
    0,
    [_IP],
    [() => exports.InstanceProfile$], 1
];
exports.CreateLoginProfileRequest$ = [3, n0, _CLPR,
    0,
    [_UN, _Pas, _PRR],
    [0, [() => passwordType, 0], 2]
];
exports.CreateLoginProfileResponse$ = [3, n0, _CLPRr,
    0,
    [_LP],
    [() => exports.LoginProfile$], 1
];
exports.CreateOpenIDConnectProviderRequest$ = [3, n0, _COIDCPR,
    0,
    [_U, _CIDL, _TL, _T],
    [0, 64 | 0, 64 | 0, () => tagListType], 1
];
exports.CreateOpenIDConnectProviderResponse$ = [3, n0, _COIDCPRr,
    0,
    [_OIDCPA, _T],
    [0, () => tagListType]
];
exports.CreatePolicyRequest$ = [3, n0, _CPRr,
    0,
    [_PN, _PD, _Pa, _D, _T],
    [0, 0, 0, 0, () => tagListType], 2
];
exports.CreatePolicyResponse$ = [3, n0, _CPRre,
    0,
    [_Po],
    [() => exports.Policy$]
];
exports.CreatePolicyVersionRequest$ = [3, n0, _CPVR,
    0,
    [_PA, _PD, _SAD],
    [0, 0, 2], 2
];
exports.CreatePolicyVersionResponse$ = [3, n0, _CPVRr,
    0,
    [_PV],
    [() => exports.PolicyVersion$]
];
exports.CreateRoleRequest$ = [3, n0, _CRR,
    0,
    [_RN, _ARPD, _Pa, _D, _MSD, _PB, _T],
    [0, 0, 0, 0, 1, 0, () => tagListType], 2
];
exports.CreateRoleResponse$ = [3, n0, _CRRr,
    0,
    [_Ro],
    [() => exports.Role$], 1
];
exports.CreateSAMLProviderRequest$ = [3, n0, _CSAMLPR,
    0,
    [_SAMLMD, _N, _T, _AEM, _APK],
    [0, 0, () => tagListType, 0, [() => privateKeyType, 0]], 2
];
exports.CreateSAMLProviderResponse$ = [3, n0, _CSAMLPRr,
    0,
    [_SAMLPA, _T],
    [0, () => tagListType]
];
exports.CreateServiceLinkedRoleRequest$ = [3, n0, _CSLRR,
    0,
    [_AWSSN, _D, _CS],
    [0, 0, 0], 1
];
exports.CreateServiceLinkedRoleResponse$ = [3, n0, _CSLRRr,
    0,
    [_Ro],
    [() => exports.Role$]
];
exports.CreateServiceSpecificCredentialRequest$ = [3, n0, _CSSCR,
    0,
    [_UN, _SN, _CAD],
    [0, 0, 1], 2
];
exports.CreateServiceSpecificCredentialResponse$ = [3, n0, _CSSCRr,
    0,
    [_SSC],
    [[() => exports.ServiceSpecificCredential$, 0]]
];
exports.CreateUserRequest$ = [3, n0, _CUR,
    0,
    [_UN, _Pa, _PB, _T],
    [0, 0, 0, () => tagListType], 1
];
exports.CreateUserResponse$ = [3, n0, _CURr,
    0,
    [_Us],
    [() => exports.User$]
];
exports.CreateVirtualMFADeviceRequest$ = [3, n0, _CVMFADR,
    0,
    [_VMFADN, _Pa, _T],
    [0, 0, () => tagListType], 1
];
exports.CreateVirtualMFADeviceResponse$ = [3, n0, _CVMFADRr,
    0,
    [_VMFAD],
    [[() => exports.VirtualMFADevice$, 0]], 1
];
exports.DeactivateMFADeviceRequest$ = [3, n0, _DMFADR,
    0,
    [_SNer, _UN],
    [0, 0], 1
];
exports.DelegationPermission$ = [3, n0, _DP,
    0,
    [_PTA, _Par],
    [0, () => policyParameterListType]
];
exports.DelegationRequest$ = [3, n0, _DR,
    0,
    [_DRI, _OAI, _D, _RM, _P, _PP, _RPRA, _OI, _AI, _St, _ET, _RI, _RNe, _CD, _SD, _RU, _No, _RR, _OSBO, _UT],
    [0, 0, 0, 0, () => exports.DelegationPermission$, 0, 64 | 0, 0, 0, 0, 4, 0, 0, 4, 1, 0, 0, 0, 2, 4]
];
exports.DeleteAccessKeyRequest$ = [3, n0, _DAKR,
    0,
    [_AKI, _UN],
    [0, 0], 1
];
exports.DeleteAccountAliasRequest$ = [3, n0, _DAAR,
    0,
    [_AA],
    [0], 1
];
exports.DeleteGroupPolicyRequest$ = [3, n0, _DGPR,
    0,
    [_GN, _PN],
    [0, 0], 2
];
exports.DeleteGroupRequest$ = [3, n0, _DGR,
    0,
    [_GN],
    [0], 1
];
exports.DeleteInstanceProfileRequest$ = [3, n0, _DIPR,
    0,
    [_IPN],
    [0], 1
];
exports.DeleteLoginProfileRequest$ = [3, n0, _DLPR,
    0,
    [_UN],
    [0]
];
exports.DeleteOpenIDConnectProviderRequest$ = [3, n0, _DOIDCPR,
    0,
    [_OIDCPA],
    [0], 1
];
exports.DeletePolicyRequest$ = [3, n0, _DPR,
    0,
    [_PA],
    [0], 1
];
exports.DeletePolicyVersionRequest$ = [3, n0, _DPVR,
    0,
    [_PA, _VI],
    [0, 0], 2
];
exports.DeleteRolePermissionsBoundaryRequest$ = [3, n0, _DRPBR,
    0,
    [_RN],
    [0], 1
];
exports.DeleteRolePolicyRequest$ = [3, n0, _DRPR,
    0,
    [_RN, _PN],
    [0, 0], 2
];
exports.DeleteRoleRequest$ = [3, n0, _DRR,
    0,
    [_RN],
    [0], 1
];
exports.DeleteSAMLProviderRequest$ = [3, n0, _DSAMLPR,
    0,
    [_SAMLPA],
    [0], 1
];
exports.DeleteServerCertificateRequest$ = [3, n0, _DSCR,
    0,
    [_SCN],
    [0], 1
];
exports.DeleteServiceLinkedRoleRequest$ = [3, n0, _DSLRR,
    0,
    [_RN],
    [0], 1
];
exports.DeleteServiceLinkedRoleResponse$ = [3, n0, _DSLRRe,
    0,
    [_DTI],
    [0], 1
];
exports.DeleteServiceSpecificCredentialRequest$ = [3, n0, _DSSCR,
    0,
    [_SSCI, _UN],
    [0, 0], 1
];
exports.DeleteSigningCertificateRequest$ = [3, n0, _DSCRe,
    0,
    [_CI, _UN],
    [0, 0], 1
];
exports.DeleteSSHPublicKeyRequest$ = [3, n0, _DSSHPKR,
    0,
    [_UN, _SSHPKI],
    [0, 0], 2
];
exports.DeleteUserPermissionsBoundaryRequest$ = [3, n0, _DUPBR,
    0,
    [_UN],
    [0], 1
];
exports.DeleteUserPolicyRequest$ = [3, n0, _DUPR,
    0,
    [_UN, _PN],
    [0, 0], 2
];
exports.DeleteUserRequest$ = [3, n0, _DUR,
    0,
    [_UN],
    [0], 1
];
exports.DeleteVirtualMFADeviceRequest$ = [3, n0, _DVMFADR,
    0,
    [_SNer],
    [0], 1
];
exports.DeletionTaskFailureReasonType$ = [3, n0, _DTFRT,
    0,
    [_Re, _RUL],
    [0, () => RoleUsageListType]
];
exports.DetachGroupPolicyRequest$ = [3, n0, _DGPRe,
    0,
    [_GN, _PA],
    [0, 0], 2
];
exports.DetachRolePolicyRequest$ = [3, n0, _DRPRe,
    0,
    [_RN, _PA],
    [0, 0], 2
];
exports.DetachUserPolicyRequest$ = [3, n0, _DUPRe,
    0,
    [_UN, _PA],
    [0, 0], 2
];
exports.DisableOrganizationsRootCredentialsManagementRequest$ = [3, n0, _DORCMR,
    0,
    [],
    []
];
exports.DisableOrganizationsRootCredentialsManagementResponse$ = [3, n0, _DORCMRi,
    0,
    [_OIr, _EF],
    [0, 64 | 0]
];
exports.DisableOrganizationsRootSessionsRequest$ = [3, n0, _DORSR,
    0,
    [],
    []
];
exports.DisableOrganizationsRootSessionsResponse$ = [3, n0, _DORSRi,
    0,
    [_OIr, _EF],
    [0, 64 | 0]
];
exports.EnableMFADeviceRequest$ = [3, n0, _EMFADR,
    0,
    [_UN, _SNer, _AC, _ACu],
    [0, 0, 0, 0], 4
];
exports.EnableOrganizationsRootCredentialsManagementRequest$ = [3, n0, _EORCMR,
    0,
    [],
    []
];
exports.EnableOrganizationsRootCredentialsManagementResponse$ = [3, n0, _EORCMRn,
    0,
    [_OIr, _EF],
    [0, 64 | 0]
];
exports.EnableOrganizationsRootSessionsRequest$ = [3, n0, _EORSR,
    0,
    [],
    []
];
exports.EnableOrganizationsRootSessionsResponse$ = [3, n0, _EORSRn,
    0,
    [_OIr, _EF],
    [0, 64 | 0]
];
exports.EnableOutboundWebIdentityFederationResponse$ = [3, n0, _EOWIFR,
    0,
    [_II],
    [0]
];
exports.EntityDetails$ = [3, n0, _ED,
    0,
    [_EI, _LA],
    [() => exports.EntityInfo$, 4], 1
];
exports.EntityInfo$ = [3, n0, _EI,
    0,
    [_A, _N, _Ty, _I, _Pa],
    [0, 0, 0, 0, 0], 4
];
exports.ErrorDetails$ = [3, n0, _EDr,
    0,
    [_M, _C],
    [0, 0], 2
];
exports.EvaluationResult$ = [3, n0, _ER,
    0,
    [_EAN, _EDv, _ERN, _MS, _MCV, _ODD, _PBDD, _EDD, _RSR],
    [0, 0, 0, () => StatementListType, 64 | 0, () => exports.OrganizationsDecisionDetail$, () => exports.PermissionsBoundaryDecisionDetail$, 128 | 0, () => ResourceSpecificResultListType], 2
];
exports.GenerateCredentialReportResponse$ = [3, n0, _GCRR,
    0,
    [_St, _D],
    [0, 0]
];
exports.GenerateOrganizationsAccessReportRequest$ = [3, n0, _GOARR,
    0,
    [_EP, _OPI],
    [0, 0], 1
];
exports.GenerateOrganizationsAccessReportResponse$ = [3, n0, _GOARRe,
    0,
    [_JI],
    [0]
];
exports.GenerateServiceLastAccessedDetailsRequest$ = [3, n0, _GSLADR,
    0,
    [_A, _Gr],
    [0, 0], 1
];
exports.GenerateServiceLastAccessedDetailsResponse$ = [3, n0, _GSLADRe,
    0,
    [_JI],
    [0]
];
exports.GetAccessKeyLastUsedRequest$ = [3, n0, _GAKLUR,
    0,
    [_AKI],
    [0], 1
];
exports.GetAccessKeyLastUsedResponse$ = [3, n0, _GAKLURe,
    0,
    [_UN, _AKLU],
    [0, () => exports.AccessKeyLastUsed$]
];
exports.GetAccountAuthorizationDetailsRequest$ = [3, n0, _GAADR,
    0,
    [_F, _MI, _Ma],
    [64 | 0, 1, 0]
];
exports.GetAccountAuthorizationDetailsResponse$ = [3, n0, _GAADRe,
    0,
    [_UDL, _GDL, _RDL, _Pol, _IT, _Ma],
    [() => userDetailListType, () => groupDetailListType, () => roleDetailListType, () => ManagedPolicyDetailListType, 2, 0]
];
exports.GetAccountPasswordPolicyResponse$ = [3, n0, _GAPPR,
    0,
    [_PPa],
    [() => exports.PasswordPolicy$], 1
];
exports.GetAccountSummaryResponse$ = [3, n0, _GASR,
    0,
    [_SM],
    [128 | 1]
];
exports.GetContextKeysForCustomPolicyRequest$ = [3, n0, _GCKFCPR,
    0,
    [_PIL],
    [64 | 0], 1
];
exports.GetContextKeysForPolicyResponse$ = [3, n0, _GCKFPR,
    0,
    [_CKNo],
    [64 | 0]
];
exports.GetContextKeysForPrincipalPolicyRequest$ = [3, n0, _GCKFPPR,
    0,
    [_PSA, _PIL],
    [0, 64 | 0], 1
];
exports.GetCredentialReportResponse$ = [3, n0, _GCRRe,
    0,
    [_Co, _RF, _GT],
    [21, 0, 4]
];
exports.GetDelegationRequestRequest$ = [3, n0, _GDRR,
    0,
    [_DRI, _DPC],
    [0, 2], 1
];
exports.GetDelegationRequestResponse$ = [3, n0, _GDRRe,
    0,
    [_DR, _PCS, _PCR],
    [() => exports.DelegationRequest$, 0, 0]
];
exports.GetGroupPolicyRequest$ = [3, n0, _GGPR,
    0,
    [_GN, _PN],
    [0, 0], 2
];
exports.GetGroupPolicyResponse$ = [3, n0, _GGPRe,
    0,
    [_GN, _PN, _PD],
    [0, 0, 0], 3
];
exports.GetGroupRequest$ = [3, n0, _GGR,
    0,
    [_GN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.GetGroupResponse$ = [3, n0, _GGRe,
    0,
    [_G, _Use, _IT, _Ma],
    [() => exports.Group$, () => userListType, 2, 0], 2
];
exports.GetHumanReadableSummaryRequest$ = [3, n0, _GHRSR,
    0,
    [_EA, _L],
    [0, 0], 1
];
exports.GetHumanReadableSummaryResponse$ = [3, n0, _GHRSRe,
    0,
    [_SC, _L, _SS],
    [0, 0, 0]
];
exports.GetInstanceProfileRequest$ = [3, n0, _GIPR,
    0,
    [_IPN],
    [0], 1
];
exports.GetInstanceProfileResponse$ = [3, n0, _GIPRe,
    0,
    [_IP],
    [() => exports.InstanceProfile$], 1
];
exports.GetLoginProfileRequest$ = [3, n0, _GLPR,
    0,
    [_UN],
    [0]
];
exports.GetLoginProfileResponse$ = [3, n0, _GLPRe,
    0,
    [_LP],
    [() => exports.LoginProfile$], 1
];
exports.GetMFADeviceRequest$ = [3, n0, _GMFADR,
    0,
    [_SNer, _UN],
    [0, 0], 1
];
exports.GetMFADeviceResponse$ = [3, n0, _GMFADRe,
    0,
    [_SNer, _UN, _EDn, _Ce],
    [0, 0, 4, 128 | 0], 1
];
exports.GetOpenIDConnectProviderRequest$ = [3, n0, _GOIDCPR,
    0,
    [_OIDCPA],
    [0], 1
];
exports.GetOpenIDConnectProviderResponse$ = [3, n0, _GOIDCPRe,
    0,
    [_U, _CIDL, _TL, _CD, _T],
    [0, 64 | 0, 64 | 0, 4, () => tagListType]
];
exports.GetOrganizationsAccessReportRequest$ = [3, n0, _GOARRet,
    0,
    [_JI, _MI, _Ma, _SK],
    [0, 1, 0, 0], 1
];
exports.GetOrganizationsAccessReportResponse$ = [3, n0, _GOARRetr,
    0,
    [_JS, _JCD, _JCDo, _NOSA, _NOSNA, _ADc, _IT, _Ma, _EDr],
    [0, 4, 4, 1, 1, () => AccessDetails, 2, 0, () => exports.ErrorDetails$], 2
];
exports.GetOutboundWebIdentityFederationInfoResponse$ = [3, n0, _GOWIFIR,
    0,
    [_II, _JVE],
    [0, 2]
];
exports.GetPolicyRequest$ = [3, n0, _GPR,
    0,
    [_PA],
    [0], 1
];
exports.GetPolicyResponse$ = [3, n0, _GPRe,
    0,
    [_Po],
    [() => exports.Policy$]
];
exports.GetPolicyVersionRequest$ = [3, n0, _GPVR,
    0,
    [_PA, _VI],
    [0, 0], 2
];
exports.GetPolicyVersionResponse$ = [3, n0, _GPVRe,
    0,
    [_PV],
    [() => exports.PolicyVersion$]
];
exports.GetRolePolicyRequest$ = [3, n0, _GRPR,
    0,
    [_RN, _PN],
    [0, 0], 2
];
exports.GetRolePolicyResponse$ = [3, n0, _GRPRe,
    0,
    [_RN, _PN, _PD],
    [0, 0, 0], 3
];
exports.GetRoleRequest$ = [3, n0, _GRR,
    0,
    [_RN],
    [0], 1
];
exports.GetRoleResponse$ = [3, n0, _GRRe,
    0,
    [_Ro],
    [() => exports.Role$], 1
];
exports.GetSAMLProviderRequest$ = [3, n0, _GSAMLPR,
    0,
    [_SAMLPA],
    [0], 1
];
exports.GetSAMLProviderResponse$ = [3, n0, _GSAMLPRe,
    0,
    [_SAMLPUUID, _SAMLMD, _CD, _VU, _T, _AEM, _PKL],
    [0, 0, 4, 4, () => tagListType, 0, () => privateKeyList]
];
exports.GetServerCertificateRequest$ = [3, n0, _GSCR,
    0,
    [_SCN],
    [0], 1
];
exports.GetServerCertificateResponse$ = [3, n0, _GSCRe,
    0,
    [_SCe],
    [() => exports.ServerCertificate$], 1
];
exports.GetServiceLastAccessedDetailsRequest$ = [3, n0, _GSLADRet,
    0,
    [_JI, _MI, _Ma],
    [0, 1, 0], 1
];
exports.GetServiceLastAccessedDetailsResponse$ = [3, n0, _GSLADRete,
    0,
    [_JS, _JCD, _SLA, _JCDo, _JT, _IT, _Ma, _E],
    [0, 4, () => ServicesLastAccessed, 4, 0, 2, 0, () => exports.ErrorDetails$], 4
];
exports.GetServiceLastAccessedDetailsWithEntitiesRequest$ = [3, n0, _GSLADWER,
    0,
    [_JI, _SNe, _MI, _Ma],
    [0, 0, 1, 0], 2
];
exports.GetServiceLastAccessedDetailsWithEntitiesResponse$ = [3, n0, _GSLADWERe,
    0,
    [_JS, _JCD, _JCDo, _EDL, _IT, _Ma, _E],
    [0, 4, 4, () => entityDetailsListType, 2, 0, () => exports.ErrorDetails$], 4
];
exports.GetServiceLinkedRoleDeletionStatusRequest$ = [3, n0, _GSLRDSR,
    0,
    [_DTI],
    [0], 1
];
exports.GetServiceLinkedRoleDeletionStatusResponse$ = [3, n0, _GSLRDSRe,
    0,
    [_S, _Re],
    [0, () => exports.DeletionTaskFailureReasonType$], 1
];
exports.GetSSHPublicKeyRequest$ = [3, n0, _GSSHPKR,
    0,
    [_UN, _SSHPKI, _En],
    [0, 0, 0], 3
];
exports.GetSSHPublicKeyResponse$ = [3, n0, _GSSHPKRe,
    0,
    [_SSHPK],
    [() => exports.SSHPublicKey$]
];
exports.GetUserPolicyRequest$ = [3, n0, _GUPR,
    0,
    [_UN, _PN],
    [0, 0], 2
];
exports.GetUserPolicyResponse$ = [3, n0, _GUPRe,
    0,
    [_UN, _PN, _PD],
    [0, 0, 0], 3
];
exports.GetUserRequest$ = [3, n0, _GUR,
    0,
    [_UN],
    [0]
];
exports.GetUserResponse$ = [3, n0, _GURe,
    0,
    [_Us],
    [() => exports.User$], 1
];
exports.Group$ = [3, n0, _G,
    0,
    [_Pa, _GN, _GI, _A, _CD],
    [0, 0, 0, 0, 4], 5
];
exports.GroupDetail$ = [3, n0, _GD,
    0,
    [_Pa, _GN, _GI, _A, _CD, _GPL, _AMP],
    [0, 0, 0, 0, 4, () => policyDetailListType, () => attachedPoliciesListType]
];
exports.InstanceProfile$ = [3, n0, _IP,
    0,
    [_Pa, _IPN, _IPI, _A, _CD, _Rol, _T],
    [0, 0, 0, 0, 4, () => roleListType, () => tagListType], 6
];
exports.ListAccessKeysRequest$ = [3, n0, _LAKR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1]
];
exports.ListAccessKeysResponse$ = [3, n0, _LAKRi,
    0,
    [_AKM, _IT, _Ma],
    [() => accessKeyMetadataListType, 2, 0], 1
];
exports.ListAccountAliasesRequest$ = [3, n0, _LAAR,
    0,
    [_Ma, _MI],
    [0, 1]
];
exports.ListAccountAliasesResponse$ = [3, n0, _LAARi,
    0,
    [_AAc, _IT, _Ma],
    [64 | 0, 2, 0], 1
];
exports.ListAttachedGroupPoliciesRequest$ = [3, n0, _LAGPR,
    0,
    [_GN, _PPat, _Ma, _MI],
    [0, 0, 0, 1], 1
];
exports.ListAttachedGroupPoliciesResponse$ = [3, n0, _LAGPRi,
    0,
    [_APt, _IT, _Ma],
    [() => attachedPoliciesListType, 2, 0]
];
exports.ListAttachedRolePoliciesRequest$ = [3, n0, _LARPR,
    0,
    [_RN, _PPat, _Ma, _MI],
    [0, 0, 0, 1], 1
];
exports.ListAttachedRolePoliciesResponse$ = [3, n0, _LARPRi,
    0,
    [_APt, _IT, _Ma],
    [() => attachedPoliciesListType, 2, 0]
];
exports.ListAttachedUserPoliciesRequest$ = [3, n0, _LAUPR,
    0,
    [_UN, _PPat, _Ma, _MI],
    [0, 0, 0, 1], 1
];
exports.ListAttachedUserPoliciesResponse$ = [3, n0, _LAUPRi,
    0,
    [_APt, _IT, _Ma],
    [() => attachedPoliciesListType, 2, 0]
];
exports.ListDelegationRequestsRequest$ = [3, n0, _LDRR,
    0,
    [_OI, _Ma, _MI],
    [0, 0, 1]
];
exports.ListDelegationRequestsResponse$ = [3, n0, _LDRRi,
    0,
    [_DRe, _Ma, _iT],
    [() => delegationRequestsListType, 0, 2]
];
exports.ListEntitiesForPolicyRequest$ = [3, n0, _LEFPR,
    0,
    [_PA, _EFn, _PPat, _PUF, _Ma, _MI],
    [0, 0, 0, 0, 0, 1], 1
];
exports.ListEntitiesForPolicyResponse$ = [3, n0, _LEFPRi,
    0,
    [_PG, _PU, _PR, _IT, _Ma],
    [() => PolicyGroupListType, () => PolicyUserListType, () => PolicyRoleListType, 2, 0]
];
exports.ListGroupPoliciesRequest$ = [3, n0, _LGPR,
    0,
    [_GN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListGroupPoliciesResponse$ = [3, n0, _LGPRi,
    0,
    [_PNo, _IT, _Ma],
    [64 | 0, 2, 0], 1
];
exports.ListGroupsForUserRequest$ = [3, n0, _LGFUR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListGroupsForUserResponse$ = [3, n0, _LGFURi,
    0,
    [_Gro, _IT, _Ma],
    [() => groupListType, 2, 0], 1
];
exports.ListGroupsRequest$ = [3, n0, _LGR,
    0,
    [_PPat, _Ma, _MI],
    [0, 0, 1]
];
exports.ListGroupsResponse$ = [3, n0, _LGRi,
    0,
    [_Gro, _IT, _Ma],
    [() => groupListType, 2, 0], 1
];
exports.ListInstanceProfilesForRoleRequest$ = [3, n0, _LIPFRR,
    0,
    [_RN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListInstanceProfilesForRoleResponse$ = [3, n0, _LIPFRRi,
    0,
    [_IPn, _IT, _Ma],
    [() => instanceProfileListType, 2, 0], 1
];
exports.ListInstanceProfilesRequest$ = [3, n0, _LIPR,
    0,
    [_PPat, _Ma, _MI],
    [0, 0, 1]
];
exports.ListInstanceProfilesResponse$ = [3, n0, _LIPRi,
    0,
    [_IPn, _IT, _Ma],
    [() => instanceProfileListType, 2, 0], 1
];
exports.ListInstanceProfileTagsRequest$ = [3, n0, _LIPTR,
    0,
    [_IPN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListInstanceProfileTagsResponse$ = [3, n0, _LIPTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListMFADevicesRequest$ = [3, n0, _LMFADR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1]
];
exports.ListMFADevicesResponse$ = [3, n0, _LMFADRi,
    0,
    [_MFAD, _IT, _Ma],
    [() => mfaDeviceListType, 2, 0], 1
];
exports.ListMFADeviceTagsRequest$ = [3, n0, _LMFADTR,
    0,
    [_SNer, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListMFADeviceTagsResponse$ = [3, n0, _LMFADTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListOpenIDConnectProvidersRequest$ = [3, n0, _LOIDCPR,
    0,
    [],
    []
];
exports.ListOpenIDConnectProvidersResponse$ = [3, n0, _LOIDCPRi,
    0,
    [_OIDCPL],
    [() => OpenIDConnectProviderListType]
];
exports.ListOpenIDConnectProviderTagsRequest$ = [3, n0, _LOIDCPTR,
    0,
    [_OIDCPA, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListOpenIDConnectProviderTagsResponse$ = [3, n0, _LOIDCPTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListOrganizationsFeaturesRequest$ = [3, n0, _LOFR,
    0,
    [],
    []
];
exports.ListOrganizationsFeaturesResponse$ = [3, n0, _LOFRi,
    0,
    [_OIr, _EF],
    [0, 64 | 0]
];
exports.ListPoliciesGrantingServiceAccessEntry$ = [3, n0, _LPGSAE,
    0,
    [_SNe, _Pol],
    [0, () => policyGrantingServiceAccessListType]
];
exports.ListPoliciesGrantingServiceAccessRequest$ = [3, n0, _LPGSAR,
    0,
    [_A, _SNerv, _Ma],
    [0, 64 | 0, 0], 2
];
exports.ListPoliciesGrantingServiceAccessResponse$ = [3, n0, _LPGSARi,
    0,
    [_PGSA, _IT, _Ma],
    [() => listPolicyGrantingServiceAccessResponseListType, 2, 0], 1
];
exports.ListPoliciesRequest$ = [3, n0, _LPR,
    0,
    [_Sc, _OA, _PPat, _PUF, _Ma, _MI],
    [0, 2, 0, 0, 0, 1]
];
exports.ListPoliciesResponse$ = [3, n0, _LPRi,
    0,
    [_Pol, _IT, _Ma],
    [() => policyListType, 2, 0]
];
exports.ListPolicyTagsRequest$ = [3, n0, _LPTR,
    0,
    [_PA, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListPolicyTagsResponse$ = [3, n0, _LPTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListPolicyVersionsRequest$ = [3, n0, _LPVR,
    0,
    [_PA, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListPolicyVersionsResponse$ = [3, n0, _LPVRi,
    0,
    [_V, _IT, _Ma],
    [() => policyDocumentVersionListType, 2, 0]
];
exports.ListRolePoliciesRequest$ = [3, n0, _LRPR,
    0,
    [_RN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListRolePoliciesResponse$ = [3, n0, _LRPRi,
    0,
    [_PNo, _IT, _Ma],
    [64 | 0, 2, 0], 1
];
exports.ListRolesRequest$ = [3, n0, _LRR,
    0,
    [_PPat, _Ma, _MI],
    [0, 0, 1]
];
exports.ListRolesResponse$ = [3, n0, _LRRi,
    0,
    [_Rol, _IT, _Ma],
    [() => roleListType, 2, 0], 1
];
exports.ListRoleTagsRequest$ = [3, n0, _LRTR,
    0,
    [_RN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListRoleTagsResponse$ = [3, n0, _LRTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListSAMLProvidersRequest$ = [3, n0, _LSAMLPR,
    0,
    [],
    []
];
exports.ListSAMLProvidersResponse$ = [3, n0, _LSAMLPRi,
    0,
    [_SAMLPL],
    [() => SAMLProviderListType]
];
exports.ListSAMLProviderTagsRequest$ = [3, n0, _LSAMLPTR,
    0,
    [_SAMLPA, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListSAMLProviderTagsResponse$ = [3, n0, _LSAMLPTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListServerCertificatesRequest$ = [3, n0, _LSCR,
    0,
    [_PPat, _Ma, _MI],
    [0, 0, 1]
];
exports.ListServerCertificatesResponse$ = [3, n0, _LSCRi,
    0,
    [_SCML, _IT, _Ma],
    [() => serverCertificateMetadataListType, 2, 0], 1
];
exports.ListServerCertificateTagsRequest$ = [3, n0, _LSCTR,
    0,
    [_SCN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListServerCertificateTagsResponse$ = [3, n0, _LSCTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListServiceSpecificCredentialsRequest$ = [3, n0, _LSSCR,
    0,
    [_UN, _SN, _AU, _Ma, _MI],
    [0, 0, 2, 0, 1]
];
exports.ListServiceSpecificCredentialsResponse$ = [3, n0, _LSSCRi,
    0,
    [_SSCe, _Ma, _IT],
    [() => ServiceSpecificCredentialsListType, 0, 2]
];
exports.ListSigningCertificatesRequest$ = [3, n0, _LSCRis,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1]
];
exports.ListSigningCertificatesResponse$ = [3, n0, _LSCRist,
    0,
    [_Cer, _IT, _Ma],
    [() => certificateListType, 2, 0], 1
];
exports.ListSSHPublicKeysRequest$ = [3, n0, _LSSHPKR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1]
];
exports.ListSSHPublicKeysResponse$ = [3, n0, _LSSHPKRi,
    0,
    [_SSHPKu, _IT, _Ma],
    [() => SSHPublicKeyListType, 2, 0]
];
exports.ListUserPoliciesRequest$ = [3, n0, _LUPR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListUserPoliciesResponse$ = [3, n0, _LUPRi,
    0,
    [_PNo, _IT, _Ma],
    [64 | 0, 2, 0], 1
];
exports.ListUsersRequest$ = [3, n0, _LUR,
    0,
    [_PPat, _Ma, _MI],
    [0, 0, 1]
];
exports.ListUsersResponse$ = [3, n0, _LURi,
    0,
    [_Use, _IT, _Ma],
    [() => userListType, 2, 0], 1
];
exports.ListUserTagsRequest$ = [3, n0, _LUTR,
    0,
    [_UN, _Ma, _MI],
    [0, 0, 1], 1
];
exports.ListUserTagsResponse$ = [3, n0, _LUTRi,
    0,
    [_T, _IT, _Ma],
    [() => tagListType, 2, 0], 1
];
exports.ListVirtualMFADevicesRequest$ = [3, n0, _LVMFADR,
    0,
    [_AS, _Ma, _MI],
    [0, 0, 1]
];
exports.ListVirtualMFADevicesResponse$ = [3, n0, _LVMFADRi,
    0,
    [_VMFADi, _IT, _Ma],
    [[() => virtualMFADeviceListType, 0], 2, 0], 1
];
exports.LoginProfile$ = [3, n0, _LP,
    0,
    [_UN, _CD, _PRR],
    [0, 4, 2], 2
];
exports.ManagedPolicyDetail$ = [3, n0, _MPD,
    0,
    [_PN, _PI, _A, _Pa, _DVI, _ACt, _PBUC, _IA, _D, _CD, _UD, _PVL],
    [0, 0, 0, 0, 0, 1, 1, 2, 0, 4, 4, () => policyDocumentVersionListType]
];
exports.MFADevice$ = [3, n0, _MFADe,
    0,
    [_UN, _SNer, _EDn],
    [0, 0, 4], 3
];
exports.OpenIDConnectProviderListEntry$ = [3, n0, _OIDCPLE,
    0,
    [_A],
    [0]
];
exports.OrganizationsDecisionDetail$ = [3, n0, _ODD,
    0,
    [_ABO],
    [2]
];
exports.PasswordPolicy$ = [3, n0, _PPa,
    0,
    [_MPL, _RS, _RNeq, _RUC, _RLC, _AUTCP, _EPx, _MPA, _PRP, _HE],
    [1, 2, 2, 2, 2, 2, 2, 1, 1, 2]
];
exports.PermissionsBoundaryDecisionDetail$ = [3, n0, _PBDD,
    0,
    [_ABPB],
    [2]
];
exports.Policy$ = [3, n0, _Po,
    0,
    [_PN, _PI, _A, _Pa, _DVI, _ACt, _PBUC, _IA, _D, _CD, _UD, _T],
    [0, 0, 0, 0, 0, 1, 1, 2, 0, 4, 4, () => tagListType]
];
exports.PolicyDetail$ = [3, n0, _PDo,
    0,
    [_PN, _PD],
    [0, 0]
];
exports.PolicyGrantingServiceAccess$ = [3, n0, _PGSAo,
    0,
    [_PN, _PT, _PA, _ETn, _EN],
    [0, 0, 0, 0, 0], 2
];
exports.PolicyGroup$ = [3, n0, _PGo,
    0,
    [_GN, _GI],
    [0, 0]
];
exports.PolicyParameter$ = [3, n0, _PPo,
    0,
    [_N, _Va, _Ty],
    [0, 64 | 0, 0]
];
exports.PolicyRole$ = [3, n0, _PRo,
    0,
    [_RN, _RIo],
    [0, 0]
];
exports.PolicyUser$ = [3, n0, _PUo,
    0,
    [_UN, _UI],
    [0, 0]
];
exports.PolicyVersion$ = [3, n0, _PV,
    0,
    [_Do, _VI, _IDV, _CD],
    [0, 0, 2, 4]
];
exports.Position$ = [3, n0, _Pos,
    0,
    [_Li, _Col],
    [1, 1]
];
exports.PutGroupPolicyRequest$ = [3, n0, _PGPR,
    0,
    [_GN, _PN, _PD],
    [0, 0, 0], 3
];
exports.PutRolePermissionsBoundaryRequest$ = [3, n0, _PRPBR,
    0,
    [_RN, _PB],
    [0, 0], 2
];
exports.PutRolePolicyRequest$ = [3, n0, _PRPR,
    0,
    [_RN, _PN, _PD],
    [0, 0, 0], 3
];
exports.PutUserPermissionsBoundaryRequest$ = [3, n0, _PUPBR,
    0,
    [_UN, _PB],
    [0, 0], 2
];
exports.PutUserPolicyRequest$ = [3, n0, _PUPR,
    0,
    [_UN, _PN, _PD],
    [0, 0, 0], 3
];
exports.RejectDelegationRequestRequest$ = [3, n0, _RDRR,
    0,
    [_DRI, _No],
    [0, 0], 1
];
exports.RemoveClientIDFromOpenIDConnectProviderRequest$ = [3, n0, _RCIDFOIDCPR,
    0,
    [_OIDCPA, _CID],
    [0, 0], 2
];
exports.RemoveRoleFromInstanceProfileRequest$ = [3, n0, _RRFIPR,
    0,
    [_IPN, _RN],
    [0, 0], 2
];
exports.RemoveUserFromGroupRequest$ = [3, n0, _RUFGR,
    0,
    [_GN, _UN],
    [0, 0], 2
];
exports.ResetServiceSpecificCredentialRequest$ = [3, n0, _RSSCR,
    0,
    [_SSCI, _UN],
    [0, 0], 1
];
exports.ResetServiceSpecificCredentialResponse$ = [3, n0, _RSSCRe,
    0,
    [_SSC],
    [[() => exports.ServiceSpecificCredential$, 0]]
];
exports.ResourceSpecificResult$ = [3, n0, _RSRe,
    0,
    [_ERN, _ERD, _MS, _MCV, _EDD, _PBDD],
    [0, 0, () => StatementListType, 64 | 0, 128 | 0, () => exports.PermissionsBoundaryDecisionDetail$], 2
];
exports.ResyncMFADeviceRequest$ = [3, n0, _RMFADR,
    0,
    [_UN, _SNer, _AC, _ACu],
    [0, 0, 0, 0], 4
];
exports.Role$ = [3, n0, _Ro,
    0,
    [_Pa, _RN, _RIo, _A, _CD, _ARPD, _D, _MSD, _PB, _T, _RLU],
    [0, 0, 0, 0, 4, 0, 0, 1, () => exports.AttachedPermissionsBoundary$, () => tagListType, () => exports.RoleLastUsed$], 5
];
exports.RoleDetail$ = [3, n0, _RD,
    0,
    [_Pa, _RN, _RIo, _A, _CD, _ARPD, _IPL, _RPL, _AMP, _PB, _T, _RLU],
    [0, 0, 0, 0, 4, 0, () => instanceProfileListType, () => policyDetailListType, () => attachedPoliciesListType, () => exports.AttachedPermissionsBoundary$, () => tagListType, () => exports.RoleLastUsed$]
];
exports.RoleLastUsed$ = [3, n0, _RLU,
    0,
    [_LUD, _R],
    [4, 0]
];
exports.RoleUsageType$ = [3, n0, _RUT,
    0,
    [_R, _Res],
    [0, 64 | 0]
];
exports.SAMLPrivateKey$ = [3, n0, _SAMLPK,
    0,
    [_KI, _Ti],
    [0, 4]
];
exports.SAMLProviderListEntry$ = [3, n0, _SAMLPLE,
    0,
    [_A, _VU, _CD],
    [0, 4, 4]
];
exports.SendDelegationTokenRequest$ = [3, n0, _SDTR,
    0,
    [_DRI],
    [0], 1
];
exports.ServerCertificate$ = [3, n0, _SCe,
    0,
    [_SCM, _CB, _CC, _T],
    [() => exports.ServerCertificateMetadata$, 0, 0, () => tagListType], 2
];
exports.ServerCertificateMetadata$ = [3, n0, _SCM,
    0,
    [_Pa, _SCN, _SCI, _A, _UDp, _Ex],
    [0, 0, 0, 0, 4, 4], 4
];
exports.ServiceLastAccessed$ = [3, n0, _SLAe,
    0,
    [_SN, _SNe, _LA, _LAE, _LAR, _TAE, _TALA],
    [0, 0, 4, 0, 0, 1, () => TrackedActionsLastAccessed], 2
];
exports.ServiceSpecificCredential$ = [3, n0, _SSC,
    0,
    [_CD, _SN, _SSCI, _UN, _S, _EDx, _SUN, _SP, _SCA, _SCS],
    [4, 0, 0, 0, 0, 4, 0, [() => servicePassword, 0], 0, [() => serviceCredentialSecret, 0]], 5
];
exports.ServiceSpecificCredentialMetadata$ = [3, n0, _SSCM,
    0,
    [_UN, _S, _CD, _SSCI, _SN, _SUN, _SCA, _EDx],
    [0, 0, 4, 0, 0, 0, 0, 4], 5
];
exports.SetDefaultPolicyVersionRequest$ = [3, n0, _SDPVR,
    0,
    [_PA, _VI],
    [0, 0], 2
];
exports.SetSecurityTokenServicePreferencesRequest$ = [3, n0, _SSTSPR,
    0,
    [_GETV],
    [0], 1
];
exports.SigningCertificate$ = [3, n0, _SCi,
    0,
    [_UN, _CI, _CB, _S, _UDp],
    [0, 0, 0, 0, 4], 4
];
exports.SimulateCustomPolicyRequest$ = [3, n0, _SCPR,
    0,
    [_PIL, _AN, _PBPIL, _RA, _RP, _RO, _CA, _CEo, _RHO, _MI, _Ma],
    [64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => ContextEntryListType, 0, 1, 0], 2
];
exports.SimulatePolicyResponse$ = [3, n0, _SPR,
    0,
    [_ERv, _IT, _Ma],
    [() => EvaluationResultsListType, 2, 0]
];
exports.SimulatePrincipalPolicyRequest$ = [3, n0, _SPPR,
    0,
    [_PSA, _AN, _PIL, _PBPIL, _RA, _RP, _RO, _CA, _CEo, _RHO, _MI, _Ma],
    [0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => ContextEntryListType, 0, 1, 0], 2
];
exports.SSHPublicKey$ = [3, n0, _SSHPK,
    0,
    [_UN, _SSHPKI, _Fi, _SSHPKB, _S, _UDp],
    [0, 0, 0, 0, 0, 4], 5
];
exports.SSHPublicKeyMetadata$ = [3, n0, _SSHPKM,
    0,
    [_UN, _SSHPKI, _S, _UDp],
    [0, 0, 0, 4], 4
];
exports.Statement$ = [3, n0, _Sta,
    0,
    [_SPI, _SPT, _SPt, _EPn],
    [0, 0, () => exports.Position$, () => exports.Position$]
];
exports.Tag$ = [3, n0, _Ta,
    0,
    [_K, _Val],
    [0, 0], 2
];
exports.TagInstanceProfileRequest$ = [3, n0, _TIPR,
    0,
    [_IPN, _T],
    [0, () => tagListType], 2
];
exports.TagMFADeviceRequest$ = [3, n0, _TMFADR,
    0,
    [_SNer, _T],
    [0, () => tagListType], 2
];
exports.TagOpenIDConnectProviderRequest$ = [3, n0, _TOIDCPR,
    0,
    [_OIDCPA, _T],
    [0, () => tagListType], 2
];
exports.TagPolicyRequest$ = [3, n0, _TPR,
    0,
    [_PA, _T],
    [0, () => tagListType], 2
];
exports.TagRoleRequest$ = [3, n0, _TRR,
    0,
    [_RN, _T],
    [0, () => tagListType], 2
];
exports.TagSAMLProviderRequest$ = [3, n0, _TSAMLPR,
    0,
    [_SAMLPA, _T],
    [0, () => tagListType], 2
];
exports.TagServerCertificateRequest$ = [3, n0, _TSCR,
    0,
    [_SCN, _T],
    [0, () => tagListType], 2
];
exports.TagUserRequest$ = [3, n0, _TUR,
    0,
    [_UN, _T],
    [0, () => tagListType], 2
];
exports.TrackedActionLastAccessed$ = [3, n0, _TALAr,
    0,
    [_ANc, _LAEa, _LATa, _LARa],
    [0, 0, 4, 0]
];
exports.UntagInstanceProfileRequest$ = [3, n0, _UIPR,
    0,
    [_IPN, _TK],
    [0, 64 | 0], 2
];
exports.UntagMFADeviceRequest$ = [3, n0, _UMFADR,
    0,
    [_SNer, _TK],
    [0, 64 | 0], 2
];
exports.UntagOpenIDConnectProviderRequest$ = [3, n0, _UOIDCPR,
    0,
    [_OIDCPA, _TK],
    [0, 64 | 0], 2
];
exports.UntagPolicyRequest$ = [3, n0, _UPR,
    0,
    [_PA, _TK],
    [0, 64 | 0], 2
];
exports.UntagRoleRequest$ = [3, n0, _URR,
    0,
    [_RN, _TK],
    [0, 64 | 0], 2
];
exports.UntagSAMLProviderRequest$ = [3, n0, _USAMLPR,
    0,
    [_SAMLPA, _TK],
    [0, 64 | 0], 2
];
exports.UntagServerCertificateRequest$ = [3, n0, _USCR,
    0,
    [_SCN, _TK],
    [0, 64 | 0], 2
];
exports.UntagUserRequest$ = [3, n0, _UUR,
    0,
    [_UN, _TK],
    [0, 64 | 0], 2
];
exports.UpdateAccessKeyRequest$ = [3, n0, _UAKR,
    0,
    [_AKI, _S, _UN],
    [0, 0, 0], 2
];
exports.UpdateAccountPasswordPolicyRequest$ = [3, n0, _UAPPR,
    0,
    [_MPL, _RS, _RNeq, _RUC, _RLC, _AUTCP, _MPA, _PRP, _HE],
    [1, 2, 2, 2, 2, 2, 1, 1, 2]
];
exports.UpdateAssumeRolePolicyRequest$ = [3, n0, _UARPR,
    0,
    [_RN, _PD],
    [0, 0], 2
];
exports.UpdateDelegationRequestRequest$ = [3, n0, _UDRR,
    0,
    [_DRI, _No],
    [0, 0], 1
];
exports.UpdateGroupRequest$ = [3, n0, _UGR,
    0,
    [_GN, _NPe, _NGN],
    [0, 0, 0], 1
];
exports.UpdateLoginProfileRequest$ = [3, n0, _ULPR,
    0,
    [_UN, _Pas, _PRR],
    [0, [() => passwordType, 0], 2], 1
];
exports.UpdateOpenIDConnectProviderThumbprintRequest$ = [3, n0, _UOIDCPTR,
    0,
    [_OIDCPA, _TL],
    [0, 64 | 0], 2
];
exports.UpdateRoleDescriptionRequest$ = [3, n0, _URDR,
    0,
    [_RN, _D],
    [0, 0], 2
];
exports.UpdateRoleDescriptionResponse$ = [3, n0, _URDRp,
    0,
    [_Ro],
    [() => exports.Role$]
];
exports.UpdateRoleRequest$ = [3, n0, _URRp,
    0,
    [_RN, _D, _MSD],
    [0, 0, 1], 1
];
exports.UpdateRoleResponse$ = [3, n0, _URRpd,
    0,
    [],
    []
];
exports.UpdateSAMLProviderRequest$ = [3, n0, _USAMLPRp,
    0,
    [_SAMLPA, _SAMLMD, _AEM, _APK, _RPK],
    [0, 0, 0, [() => privateKeyType, 0], 0], 1
];
exports.UpdateSAMLProviderResponse$ = [3, n0, _USAMLPRpd,
    0,
    [_SAMLPA],
    [0]
];
exports.UpdateServerCertificateRequest$ = [3, n0, _USCRp,
    0,
    [_SCN, _NPe, _NSCN],
    [0, 0, 0], 1
];
exports.UpdateServiceSpecificCredentialRequest$ = [3, n0, _USSCR,
    0,
    [_SSCI, _S, _UN],
    [0, 0, 0], 2
];
exports.UpdateSigningCertificateRequest$ = [3, n0, _USCRpd,
    0,
    [_CI, _S, _UN],
    [0, 0, 0], 2
];
exports.UpdateSSHPublicKeyRequest$ = [3, n0, _USSHPKR,
    0,
    [_UN, _SSHPKI, _S],
    [0, 0, 0], 3
];
exports.UpdateUserRequest$ = [3, n0, _UURp,
    0,
    [_UN, _NPe, _NUN],
    [0, 0, 0], 1
];
exports.UploadServerCertificateRequest$ = [3, n0, _USCRpl,
    0,
    [_SCN, _CB, _PK, _Pa, _CC, _T],
    [0, 0, [() => privateKeyType, 0], 0, 0, () => tagListType], 3
];
exports.UploadServerCertificateResponse$ = [3, n0, _USCRplo,
    0,
    [_SCM, _T],
    [() => exports.ServerCertificateMetadata$, () => tagListType]
];
exports.UploadSigningCertificateRequest$ = [3, n0, _USCRploa,
    0,
    [_CB, _UN],
    [0, 0], 1
];
exports.UploadSigningCertificateResponse$ = [3, n0, _USCRpload,
    0,
    [_Cert],
    [() => exports.SigningCertificate$], 1
];
exports.UploadSSHPublicKeyRequest$ = [3, n0, _USSHPKRp,
    0,
    [_UN, _SSHPKB],
    [0, 0], 2
];
exports.UploadSSHPublicKeyResponse$ = [3, n0, _USSHPKRpl,
    0,
    [_SSHPK],
    [() => exports.SSHPublicKey$]
];
exports.User$ = [3, n0, _Us,
    0,
    [_Pa, _UN, _UI, _A, _CD, _PLU, _PB, _T],
    [0, 0, 0, 0, 4, 4, () => exports.AttachedPermissionsBoundary$, () => tagListType], 5
];
exports.UserDetail$ = [3, n0, _UDs,
    0,
    [_Pa, _UN, _UI, _A, _CD, _UPL, _GL, _AMP, _PB, _T],
    [0, 0, 0, 0, 4, () => policyDetailListType, 64 | 0, () => attachedPoliciesListType, () => exports.AttachedPermissionsBoundary$, () => tagListType]
];
exports.VirtualMFADevice$ = [3, n0, _VMFAD,
    0,
    [_SNer, _BSS, _QRCPNG, _Us, _EDn, _T],
    [0, [() => BootstrapDatum, 0], [() => BootstrapDatum, 0], () => exports.User$, 4, () => tagListType], 1
];
var __Unit = "unit";
var AccessDetails = [1, n0, _ADc,
    0, () => exports.AccessDetail$
];
var accessKeyMetadataListType = [1, n0, _aKMLT,
    0, () => exports.AccessKeyMetadata$
];
var accountAliasListType = 64 | 0;
var ActionNameListType = 64 | 0;
var ArnListType = 64 | 0;
var attachedPoliciesListType = [1, n0, _aPLT,
    0, () => exports.AttachedPolicy$
];
var certificateListType = [1, n0, _cLT,
    0, () => exports.SigningCertificate$
];
var clientIDListType = 64 | 0;
var ContextEntryListType = [1, n0, _CELT,
    0, () => exports.ContextEntry$
];
var ContextKeyNamesResultListType = 64 | 0;
var ContextKeyValueListType = 64 | 0;
var delegationRequestsListType = [1, n0, _dRLT,
    0, () => exports.DelegationRequest$
];
var entityDetailsListType = [1, n0, _eDLT,
    0, () => exports.EntityDetails$
];
var entityListType = 64 | 0;
var EvaluationResultsListType = [1, n0, _ERLT,
    0, () => exports.EvaluationResult$
];
var FeaturesListType = 64 | 0;
var groupDetailListType = [1, n0, _gDLT,
    0, () => exports.GroupDetail$
];
var groupListType = [1, n0, _gLT,
    0, () => exports.Group$
];
var groupNameListType = 64 | 0;
var instanceProfileListType = [1, n0, _iPLT,
    0, () => exports.InstanceProfile$
];
var listPolicyGrantingServiceAccessResponseListType = [1, n0, _lPGSARLT,
    0, () => exports.ListPoliciesGrantingServiceAccessEntry$
];
var ManagedPolicyDetailListType = [1, n0, _MPDLT,
    0, () => exports.ManagedPolicyDetail$
];
var mfaDeviceListType = [1, n0, _mDLT,
    0, () => exports.MFADevice$
];
var OpenIDConnectProviderListType = [1, n0, _OIDCPLT,
    0, () => exports.OpenIDConnectProviderListEntry$
];
var policyDetailListType = [1, n0, _pDLT,
    0, () => exports.PolicyDetail$
];
var policyDocumentVersionListType = [1, n0, _pDVLT,
    0, () => exports.PolicyVersion$
];
var policyGrantingServiceAccessListType = [1, n0, _pGSALT,
    0, () => exports.PolicyGrantingServiceAccess$
];
var PolicyGroupListType = [1, n0, _PGLT,
    0, () => exports.PolicyGroup$
];
var policyListType = [1, n0, _pLT,
    0, () => exports.Policy$
];
var policyNameListType = 64 | 0;
var policyParameterListType = [1, n0, _pPLT,
    0, () => exports.PolicyParameter$
];
var policyParameterValuesListType = 64 | 0;
var PolicyRoleListType = [1, n0, _PRLT,
    0, () => exports.PolicyRole$
];
var PolicyUserListType = [1, n0, _PULT,
    0, () => exports.PolicyUser$
];
var privateKeyList = [1, n0, _pKL,
    0, () => exports.SAMLPrivateKey$
];
var ResourceNameListType = 64 | 0;
var ResourceSpecificResultListType = [1, n0, _RSRLT,
    0, () => exports.ResourceSpecificResult$
];
var roleDetailListType = [1, n0, _rDLT,
    0, () => exports.RoleDetail$
];
var roleListType = [1, n0, _rLT,
    0, () => exports.Role$
];
var rolePermissionRestrictionArnListType = 64 | 0;
var RoleUsageListType = [1, n0, _RULT,
    0, () => exports.RoleUsageType$
];
var SAMLProviderListType = [1, n0, _SAMLPLT,
    0, () => exports.SAMLProviderListEntry$
];
var serverCertificateMetadataListType = [1, n0, _sCMLT,
    0, () => exports.ServerCertificateMetadata$
];
var serviceNamespaceListType = 64 | 0;
var ServicesLastAccessed = [1, n0, _SLA,
    0, () => exports.ServiceLastAccessed$
];
var ServiceSpecificCredentialsListType = [1, n0, _SSCLT,
    0, () => exports.ServiceSpecificCredentialMetadata$
];
var SimulationPolicyListType = 64 | 0;
var SSHPublicKeyListType = [1, n0, _SSHPKLT,
    0, () => exports.SSHPublicKeyMetadata$
];
var StatementListType = [1, n0, _SLT,
    0, () => exports.Statement$
];
var tagKeyListType = 64 | 0;
var tagListType = [1, n0, _tLT,
    0, () => exports.Tag$
];
var thumbprintListType = 64 | 0;
var TrackedActionsLastAccessed = [1, n0, _TALA,
    0, () => exports.TrackedActionLastAccessed$
];
var userDetailListType = [1, n0, _uDLT,
    0, () => exports.UserDetail$
];
var userListType = [1, n0, _uLT,
    0, () => exports.User$
];
var virtualMFADeviceListType = [1, n0, _vMFADLT,
    0, [() => exports.VirtualMFADevice$,
        0]
];
var CertificationMapType = 128 | 0;
var EvalDecisionDetailsType = 128 | 0;
var summaryMapType = 128 | 1;
exports.AcceptDelegationRequest$ = [9, n0, _ADR,
    0, () => exports.AcceptDelegationRequestRequest$, () => __Unit
];
exports.AddClientIDToOpenIDConnectProvider$ = [9, n0, _ACIDTOIDCP,
    0, () => exports.AddClientIDToOpenIDConnectProviderRequest$, () => __Unit
];
exports.AddRoleToInstanceProfile$ = [9, n0, _ARTIP,
    0, () => exports.AddRoleToInstanceProfileRequest$, () => __Unit
];
exports.AddUserToGroup$ = [9, n0, _AUTG,
    0, () => exports.AddUserToGroupRequest$, () => __Unit
];
exports.AssociateDelegationRequest$ = [9, n0, _ADRs,
    0, () => exports.AssociateDelegationRequestRequest$, () => __Unit
];
exports.AttachGroupPolicy$ = [9, n0, _AGP,
    0, () => exports.AttachGroupPolicyRequest$, () => __Unit
];
exports.AttachRolePolicy$ = [9, n0, _ARP,
    0, () => exports.AttachRolePolicyRequest$, () => __Unit
];
exports.AttachUserPolicy$ = [9, n0, _AUP,
    0, () => exports.AttachUserPolicyRequest$, () => __Unit
];
exports.ChangePassword$ = [9, n0, _CP,
    0, () => exports.ChangePasswordRequest$, () => __Unit
];
exports.CreateAccessKey$ = [9, n0, _CAK,
    0, () => exports.CreateAccessKeyRequest$, () => exports.CreateAccessKeyResponse$
];
exports.CreateAccountAlias$ = [9, n0, _CAA,
    0, () => exports.CreateAccountAliasRequest$, () => __Unit
];
exports.CreateDelegationRequest$ = [9, n0, _CDR,
    0, () => exports.CreateDelegationRequestRequest$, () => exports.CreateDelegationRequestResponse$
];
exports.CreateGroup$ = [9, n0, _CG,
    0, () => exports.CreateGroupRequest$, () => exports.CreateGroupResponse$
];
exports.CreateInstanceProfile$ = [9, n0, _CIP,
    0, () => exports.CreateInstanceProfileRequest$, () => exports.CreateInstanceProfileResponse$
];
exports.CreateLoginProfile$ = [9, n0, _CLP,
    0, () => exports.CreateLoginProfileRequest$, () => exports.CreateLoginProfileResponse$
];
exports.CreateOpenIDConnectProvider$ = [9, n0, _COIDCP,
    0, () => exports.CreateOpenIDConnectProviderRequest$, () => exports.CreateOpenIDConnectProviderResponse$
];
exports.CreatePolicy$ = [9, n0, _CPr,
    0, () => exports.CreatePolicyRequest$, () => exports.CreatePolicyResponse$
];
exports.CreatePolicyVersion$ = [9, n0, _CPV,
    0, () => exports.CreatePolicyVersionRequest$, () => exports.CreatePolicyVersionResponse$
];
exports.CreateRole$ = [9, n0, _CR,
    0, () => exports.CreateRoleRequest$, () => exports.CreateRoleResponse$
];
exports.CreateSAMLProvider$ = [9, n0, _CSAMLP,
    0, () => exports.CreateSAMLProviderRequest$, () => exports.CreateSAMLProviderResponse$
];
exports.CreateServiceLinkedRole$ = [9, n0, _CSLR,
    0, () => exports.CreateServiceLinkedRoleRequest$, () => exports.CreateServiceLinkedRoleResponse$
];
exports.CreateServiceSpecificCredential$ = [9, n0, _CSSC,
    0, () => exports.CreateServiceSpecificCredentialRequest$, () => exports.CreateServiceSpecificCredentialResponse$
];
exports.CreateUser$ = [9, n0, _CU,
    0, () => exports.CreateUserRequest$, () => exports.CreateUserResponse$
];
exports.CreateVirtualMFADevice$ = [9, n0, _CVMFAD,
    0, () => exports.CreateVirtualMFADeviceRequest$, () => exports.CreateVirtualMFADeviceResponse$
];
exports.DeactivateMFADevice$ = [9, n0, _DMFAD,
    0, () => exports.DeactivateMFADeviceRequest$, () => __Unit
];
exports.DeleteAccessKey$ = [9, n0, _DAK,
    0, () => exports.DeleteAccessKeyRequest$, () => __Unit
];
exports.DeleteAccountAlias$ = [9, n0, _DAA,
    0, () => exports.DeleteAccountAliasRequest$, () => __Unit
];
exports.DeleteAccountPasswordPolicy$ = [9, n0, _DAPP,
    0, () => __Unit, () => __Unit
];
exports.DeleteGroup$ = [9, n0, _DG,
    0, () => exports.DeleteGroupRequest$, () => __Unit
];
exports.DeleteGroupPolicy$ = [9, n0, _DGP,
    0, () => exports.DeleteGroupPolicyRequest$, () => __Unit
];
exports.DeleteInstanceProfile$ = [9, n0, _DIP,
    0, () => exports.DeleteInstanceProfileRequest$, () => __Unit
];
exports.DeleteLoginProfile$ = [9, n0, _DLP,
    0, () => exports.DeleteLoginProfileRequest$, () => __Unit
];
exports.DeleteOpenIDConnectProvider$ = [9, n0, _DOIDCP,
    0, () => exports.DeleteOpenIDConnectProviderRequest$, () => __Unit
];
exports.DeletePolicy$ = [9, n0, _DPe,
    0, () => exports.DeletePolicyRequest$, () => __Unit
];
exports.DeletePolicyVersion$ = [9, n0, _DPV,
    0, () => exports.DeletePolicyVersionRequest$, () => __Unit
];
exports.DeleteRole$ = [9, n0, _DRel,
    0, () => exports.DeleteRoleRequest$, () => __Unit
];
exports.DeleteRolePermissionsBoundary$ = [9, n0, _DRPB,
    0, () => exports.DeleteRolePermissionsBoundaryRequest$, () => __Unit
];
exports.DeleteRolePolicy$ = [9, n0, _DRP,
    0, () => exports.DeleteRolePolicyRequest$, () => __Unit
];
exports.DeleteSAMLProvider$ = [9, n0, _DSAMLP,
    0, () => exports.DeleteSAMLProviderRequest$, () => __Unit
];
exports.DeleteServerCertificate$ = [9, n0, _DSC,
    0, () => exports.DeleteServerCertificateRequest$, () => __Unit
];
exports.DeleteServiceLinkedRole$ = [9, n0, _DSLR,
    0, () => exports.DeleteServiceLinkedRoleRequest$, () => exports.DeleteServiceLinkedRoleResponse$
];
exports.DeleteServiceSpecificCredential$ = [9, n0, _DSSC,
    0, () => exports.DeleteServiceSpecificCredentialRequest$, () => __Unit
];
exports.DeleteSigningCertificate$ = [9, n0, _DSCe,
    0, () => exports.DeleteSigningCertificateRequest$, () => __Unit
];
exports.DeleteSSHPublicKey$ = [9, n0, _DSSHPK,
    0, () => exports.DeleteSSHPublicKeyRequest$, () => __Unit
];
exports.DeleteUser$ = [9, n0, _DU,
    0, () => exports.DeleteUserRequest$, () => __Unit
];
exports.DeleteUserPermissionsBoundary$ = [9, n0, _DUPB,
    0, () => exports.DeleteUserPermissionsBoundaryRequest$, () => __Unit
];
exports.DeleteUserPolicy$ = [9, n0, _DUP,
    0, () => exports.DeleteUserPolicyRequest$, () => __Unit
];
exports.DeleteVirtualMFADevice$ = [9, n0, _DVMFAD,
    0, () => exports.DeleteVirtualMFADeviceRequest$, () => __Unit
];
exports.DetachGroupPolicy$ = [9, n0, _DGPe,
    0, () => exports.DetachGroupPolicyRequest$, () => __Unit
];
exports.DetachRolePolicy$ = [9, n0, _DRPe,
    0, () => exports.DetachRolePolicyRequest$, () => __Unit
];
exports.DetachUserPolicy$ = [9, n0, _DUPe,
    0, () => exports.DetachUserPolicyRequest$, () => __Unit
];
exports.DisableOrganizationsRootCredentialsManagement$ = [9, n0, _DORCM,
    0, () => exports.DisableOrganizationsRootCredentialsManagementRequest$, () => exports.DisableOrganizationsRootCredentialsManagementResponse$
];
exports.DisableOrganizationsRootSessions$ = [9, n0, _DORS,
    0, () => exports.DisableOrganizationsRootSessionsRequest$, () => exports.DisableOrganizationsRootSessionsResponse$
];
exports.DisableOutboundWebIdentityFederation$ = [9, n0, _DOWIF,
    0, () => __Unit, () => __Unit
];
exports.EnableMFADevice$ = [9, n0, _EMFAD,
    0, () => exports.EnableMFADeviceRequest$, () => __Unit
];
exports.EnableOrganizationsRootCredentialsManagement$ = [9, n0, _EORCM,
    0, () => exports.EnableOrganizationsRootCredentialsManagementRequest$, () => exports.EnableOrganizationsRootCredentialsManagementResponse$
];
exports.EnableOrganizationsRootSessions$ = [9, n0, _EORS,
    0, () => exports.EnableOrganizationsRootSessionsRequest$, () => exports.EnableOrganizationsRootSessionsResponse$
];
exports.EnableOutboundWebIdentityFederation$ = [9, n0, _EOWIF,
    0, () => __Unit, () => exports.EnableOutboundWebIdentityFederationResponse$
];
exports.GenerateCredentialReport$ = [9, n0, _GCR,
    0, () => __Unit, () => exports.GenerateCredentialReportResponse$
];
exports.GenerateOrganizationsAccessReport$ = [9, n0, _GOAR,
    0, () => exports.GenerateOrganizationsAccessReportRequest$, () => exports.GenerateOrganizationsAccessReportResponse$
];
exports.GenerateServiceLastAccessedDetails$ = [9, n0, _GSLAD,
    0, () => exports.GenerateServiceLastAccessedDetailsRequest$, () => exports.GenerateServiceLastAccessedDetailsResponse$
];
exports.GetAccessKeyLastUsed$ = [9, n0, _GAKLU,
    0, () => exports.GetAccessKeyLastUsedRequest$, () => exports.GetAccessKeyLastUsedResponse$
];
exports.GetAccountAuthorizationDetails$ = [9, n0, _GAAD,
    0, () => exports.GetAccountAuthorizationDetailsRequest$, () => exports.GetAccountAuthorizationDetailsResponse$
];
exports.GetAccountPasswordPolicy$ = [9, n0, _GAPP,
    0, () => __Unit, () => exports.GetAccountPasswordPolicyResponse$
];
exports.GetAccountSummary$ = [9, n0, _GAS,
    0, () => __Unit, () => exports.GetAccountSummaryResponse$
];
exports.GetContextKeysForCustomPolicy$ = [9, n0, _GCKFCP,
    0, () => exports.GetContextKeysForCustomPolicyRequest$, () => exports.GetContextKeysForPolicyResponse$
];
exports.GetContextKeysForPrincipalPolicy$ = [9, n0, _GCKFPP,
    0, () => exports.GetContextKeysForPrincipalPolicyRequest$, () => exports.GetContextKeysForPolicyResponse$
];
exports.GetCredentialReport$ = [9, n0, _GCRe,
    0, () => __Unit, () => exports.GetCredentialReportResponse$
];
exports.GetDelegationRequest$ = [9, n0, _GDR,
    0, () => exports.GetDelegationRequestRequest$, () => exports.GetDelegationRequestResponse$
];
exports.GetGroup$ = [9, n0, _GG,
    0, () => exports.GetGroupRequest$, () => exports.GetGroupResponse$
];
exports.GetGroupPolicy$ = [9, n0, _GGP,
    0, () => exports.GetGroupPolicyRequest$, () => exports.GetGroupPolicyResponse$
];
exports.GetHumanReadableSummary$ = [9, n0, _GHRS,
    0, () => exports.GetHumanReadableSummaryRequest$, () => exports.GetHumanReadableSummaryResponse$
];
exports.GetInstanceProfile$ = [9, n0, _GIP,
    0, () => exports.GetInstanceProfileRequest$, () => exports.GetInstanceProfileResponse$
];
exports.GetLoginProfile$ = [9, n0, _GLP,
    0, () => exports.GetLoginProfileRequest$, () => exports.GetLoginProfileResponse$
];
exports.GetMFADevice$ = [9, n0, _GMFAD,
    0, () => exports.GetMFADeviceRequest$, () => exports.GetMFADeviceResponse$
];
exports.GetOpenIDConnectProvider$ = [9, n0, _GOIDCP,
    0, () => exports.GetOpenIDConnectProviderRequest$, () => exports.GetOpenIDConnectProviderResponse$
];
exports.GetOrganizationsAccessReport$ = [9, n0, _GOARe,
    0, () => exports.GetOrganizationsAccessReportRequest$, () => exports.GetOrganizationsAccessReportResponse$
];
exports.GetOutboundWebIdentityFederationInfo$ = [9, n0, _GOWIFI,
    0, () => __Unit, () => exports.GetOutboundWebIdentityFederationInfoResponse$
];
exports.GetPolicy$ = [9, n0, _GP,
    0, () => exports.GetPolicyRequest$, () => exports.GetPolicyResponse$
];
exports.GetPolicyVersion$ = [9, n0, _GPV,
    0, () => exports.GetPolicyVersionRequest$, () => exports.GetPolicyVersionResponse$
];
exports.GetRole$ = [9, n0, _GR,
    0, () => exports.GetRoleRequest$, () => exports.GetRoleResponse$
];
exports.GetRolePolicy$ = [9, n0, _GRP,
    0, () => exports.GetRolePolicyRequest$, () => exports.GetRolePolicyResponse$
];
exports.GetSAMLProvider$ = [9, n0, _GSAMLP,
    0, () => exports.GetSAMLProviderRequest$, () => exports.GetSAMLProviderResponse$
];
exports.GetServerCertificate$ = [9, n0, _GSC,
    0, () => exports.GetServerCertificateRequest$, () => exports.GetServerCertificateResponse$
];
exports.GetServiceLastAccessedDetails$ = [9, n0, _GSLADe,
    0, () => exports.GetServiceLastAccessedDetailsRequest$, () => exports.GetServiceLastAccessedDetailsResponse$
];
exports.GetServiceLastAccessedDetailsWithEntities$ = [9, n0, _GSLADWE,
    0, () => exports.GetServiceLastAccessedDetailsWithEntitiesRequest$, () => exports.GetServiceLastAccessedDetailsWithEntitiesResponse$
];
exports.GetServiceLinkedRoleDeletionStatus$ = [9, n0, _GSLRDS,
    0, () => exports.GetServiceLinkedRoleDeletionStatusRequest$, () => exports.GetServiceLinkedRoleDeletionStatusResponse$
];
exports.GetSSHPublicKey$ = [9, n0, _GSSHPK,
    0, () => exports.GetSSHPublicKeyRequest$, () => exports.GetSSHPublicKeyResponse$
];
exports.GetUser$ = [9, n0, _GU,
    0, () => exports.GetUserRequest$, () => exports.GetUserResponse$
];
exports.GetUserPolicy$ = [9, n0, _GUP,
    0, () => exports.GetUserPolicyRequest$, () => exports.GetUserPolicyResponse$
];
exports.ListAccessKeys$ = [9, n0, _LAK,
    0, () => exports.ListAccessKeysRequest$, () => exports.ListAccessKeysResponse$
];
exports.ListAccountAliases$ = [9, n0, _LAA,
    0, () => exports.ListAccountAliasesRequest$, () => exports.ListAccountAliasesResponse$
];
exports.ListAttachedGroupPolicies$ = [9, n0, _LAGP,
    0, () => exports.ListAttachedGroupPoliciesRequest$, () => exports.ListAttachedGroupPoliciesResponse$
];
exports.ListAttachedRolePolicies$ = [9, n0, _LARP,
    0, () => exports.ListAttachedRolePoliciesRequest$, () => exports.ListAttachedRolePoliciesResponse$
];
exports.ListAttachedUserPolicies$ = [9, n0, _LAUP,
    0, () => exports.ListAttachedUserPoliciesRequest$, () => exports.ListAttachedUserPoliciesResponse$
];
exports.ListDelegationRequests$ = [9, n0, _LDR,
    0, () => exports.ListDelegationRequestsRequest$, () => exports.ListDelegationRequestsResponse$
];
exports.ListEntitiesForPolicy$ = [9, n0, _LEFP,
    0, () => exports.ListEntitiesForPolicyRequest$, () => exports.ListEntitiesForPolicyResponse$
];
exports.ListGroupPolicies$ = [9, n0, _LGP,
    0, () => exports.ListGroupPoliciesRequest$, () => exports.ListGroupPoliciesResponse$
];
exports.ListGroups$ = [9, n0, _LG,
    0, () => exports.ListGroupsRequest$, () => exports.ListGroupsResponse$
];
exports.ListGroupsForUser$ = [9, n0, _LGFU,
    0, () => exports.ListGroupsForUserRequest$, () => exports.ListGroupsForUserResponse$
];
exports.ListInstanceProfiles$ = [9, n0, _LIP,
    0, () => exports.ListInstanceProfilesRequest$, () => exports.ListInstanceProfilesResponse$
];
exports.ListInstanceProfilesForRole$ = [9, n0, _LIPFR,
    0, () => exports.ListInstanceProfilesForRoleRequest$, () => exports.ListInstanceProfilesForRoleResponse$
];
exports.ListInstanceProfileTags$ = [9, n0, _LIPT,
    0, () => exports.ListInstanceProfileTagsRequest$, () => exports.ListInstanceProfileTagsResponse$
];
exports.ListMFADevices$ = [9, n0, _LMFAD,
    0, () => exports.ListMFADevicesRequest$, () => exports.ListMFADevicesResponse$
];
exports.ListMFADeviceTags$ = [9, n0, _LMFADT,
    0, () => exports.ListMFADeviceTagsRequest$, () => exports.ListMFADeviceTagsResponse$
];
exports.ListOpenIDConnectProviders$ = [9, n0, _LOIDCP,
    0, () => exports.ListOpenIDConnectProvidersRequest$, () => exports.ListOpenIDConnectProvidersResponse$
];
exports.ListOpenIDConnectProviderTags$ = [9, n0, _LOIDCPT,
    0, () => exports.ListOpenIDConnectProviderTagsRequest$, () => exports.ListOpenIDConnectProviderTagsResponse$
];
exports.ListOrganizationsFeatures$ = [9, n0, _LOF,
    0, () => exports.ListOrganizationsFeaturesRequest$, () => exports.ListOrganizationsFeaturesResponse$
];
exports.ListPolicies$ = [9, n0, _LPi,
    0, () => exports.ListPoliciesRequest$, () => exports.ListPoliciesResponse$
];
exports.ListPoliciesGrantingServiceAccess$ = [9, n0, _LPGSA,
    0, () => exports.ListPoliciesGrantingServiceAccessRequest$, () => exports.ListPoliciesGrantingServiceAccessResponse$
];
exports.ListPolicyTags$ = [9, n0, _LPT,
    0, () => exports.ListPolicyTagsRequest$, () => exports.ListPolicyTagsResponse$
];
exports.ListPolicyVersions$ = [9, n0, _LPV,
    0, () => exports.ListPolicyVersionsRequest$, () => exports.ListPolicyVersionsResponse$
];
exports.ListRolePolicies$ = [9, n0, _LRP,
    0, () => exports.ListRolePoliciesRequest$, () => exports.ListRolePoliciesResponse$
];
exports.ListRoles$ = [9, n0, _LR,
    0, () => exports.ListRolesRequest$, () => exports.ListRolesResponse$
];
exports.ListRoleTags$ = [9, n0, _LRT,
    0, () => exports.ListRoleTagsRequest$, () => exports.ListRoleTagsResponse$
];
exports.ListSAMLProviders$ = [9, n0, _LSAMLP,
    0, () => exports.ListSAMLProvidersRequest$, () => exports.ListSAMLProvidersResponse$
];
exports.ListSAMLProviderTags$ = [9, n0, _LSAMLPT,
    0, () => exports.ListSAMLProviderTagsRequest$, () => exports.ListSAMLProviderTagsResponse$
];
exports.ListServerCertificates$ = [9, n0, _LSC,
    0, () => exports.ListServerCertificatesRequest$, () => exports.ListServerCertificatesResponse$
];
exports.ListServerCertificateTags$ = [9, n0, _LSCT,
    0, () => exports.ListServerCertificateTagsRequest$, () => exports.ListServerCertificateTagsResponse$
];
exports.ListServiceSpecificCredentials$ = [9, n0, _LSSC,
    0, () => exports.ListServiceSpecificCredentialsRequest$, () => exports.ListServiceSpecificCredentialsResponse$
];
exports.ListSigningCertificates$ = [9, n0, _LSCi,
    0, () => exports.ListSigningCertificatesRequest$, () => exports.ListSigningCertificatesResponse$
];
exports.ListSSHPublicKeys$ = [9, n0, _LSSHPK,
    0, () => exports.ListSSHPublicKeysRequest$, () => exports.ListSSHPublicKeysResponse$
];
exports.ListUserPolicies$ = [9, n0, _LUP,
    0, () => exports.ListUserPoliciesRequest$, () => exports.ListUserPoliciesResponse$
];
exports.ListUsers$ = [9, n0, _LU,
    0, () => exports.ListUsersRequest$, () => exports.ListUsersResponse$
];
exports.ListUserTags$ = [9, n0, _LUT,
    0, () => exports.ListUserTagsRequest$, () => exports.ListUserTagsResponse$
];
exports.ListVirtualMFADevices$ = [9, n0, _LVMFAD,
    0, () => exports.ListVirtualMFADevicesRequest$, () => exports.ListVirtualMFADevicesResponse$
];
exports.PutGroupPolicy$ = [9, n0, _PGP,
    0, () => exports.PutGroupPolicyRequest$, () => __Unit
];
exports.PutRolePermissionsBoundary$ = [9, n0, _PRPB,
    0, () => exports.PutRolePermissionsBoundaryRequest$, () => __Unit
];
exports.PutRolePolicy$ = [9, n0, _PRPu,
    0, () => exports.PutRolePolicyRequest$, () => __Unit
];
exports.PutUserPermissionsBoundary$ = [9, n0, _PUPB,
    0, () => exports.PutUserPermissionsBoundaryRequest$, () => __Unit
];
exports.PutUserPolicy$ = [9, n0, _PUP,
    0, () => exports.PutUserPolicyRequest$, () => __Unit
];
exports.RejectDelegationRequest$ = [9, n0, _RDR,
    0, () => exports.RejectDelegationRequestRequest$, () => __Unit
];
exports.RemoveClientIDFromOpenIDConnectProvider$ = [9, n0, _RCIDFOIDCP,
    0, () => exports.RemoveClientIDFromOpenIDConnectProviderRequest$, () => __Unit
];
exports.RemoveRoleFromInstanceProfile$ = [9, n0, _RRFIP,
    0, () => exports.RemoveRoleFromInstanceProfileRequest$, () => __Unit
];
exports.RemoveUserFromGroup$ = [9, n0, _RUFG,
    0, () => exports.RemoveUserFromGroupRequest$, () => __Unit
];
exports.ResetServiceSpecificCredential$ = [9, n0, _RSSC,
    0, () => exports.ResetServiceSpecificCredentialRequest$, () => exports.ResetServiceSpecificCredentialResponse$
];
exports.ResyncMFADevice$ = [9, n0, _RMFAD,
    0, () => exports.ResyncMFADeviceRequest$, () => __Unit
];
exports.SendDelegationToken$ = [9, n0, _SDT,
    0, () => exports.SendDelegationTokenRequest$, () => __Unit
];
exports.SetDefaultPolicyVersion$ = [9, n0, _SDPV,
    0, () => exports.SetDefaultPolicyVersionRequest$, () => __Unit
];
exports.SetSecurityTokenServicePreferences$ = [9, n0, _SSTSP,
    0, () => exports.SetSecurityTokenServicePreferencesRequest$, () => __Unit
];
exports.SimulateCustomPolicy$ = [9, n0, _SCP,
    0, () => exports.SimulateCustomPolicyRequest$, () => exports.SimulatePolicyResponse$
];
exports.SimulatePrincipalPolicy$ = [9, n0, _SPP,
    0, () => exports.SimulatePrincipalPolicyRequest$, () => exports.SimulatePolicyResponse$
];
exports.TagInstanceProfile$ = [9, n0, _TIP,
    0, () => exports.TagInstanceProfileRequest$, () => __Unit
];
exports.TagMFADevice$ = [9, n0, _TMFAD,
    0, () => exports.TagMFADeviceRequest$, () => __Unit
];
exports.TagOpenIDConnectProvider$ = [9, n0, _TOIDCP,
    0, () => exports.TagOpenIDConnectProviderRequest$, () => __Unit
];
exports.TagPolicy$ = [9, n0, _TP,
    0, () => exports.TagPolicyRequest$, () => __Unit
];
exports.TagRole$ = [9, n0, _TR,
    0, () => exports.TagRoleRequest$, () => __Unit
];
exports.TagSAMLProvider$ = [9, n0, _TSAMLP,
    0, () => exports.TagSAMLProviderRequest$, () => __Unit
];
exports.TagServerCertificate$ = [9, n0, _TSC,
    0, () => exports.TagServerCertificateRequest$, () => __Unit
];
exports.TagUser$ = [9, n0, _TU,
    0, () => exports.TagUserRequest$, () => __Unit
];
exports.UntagInstanceProfile$ = [9, n0, _UIP,
    0, () => exports.UntagInstanceProfileRequest$, () => __Unit
];
exports.UntagMFADevice$ = [9, n0, _UMFAD,
    0, () => exports.UntagMFADeviceRequest$, () => __Unit
];
exports.UntagOpenIDConnectProvider$ = [9, n0, _UOIDCP,
    0, () => exports.UntagOpenIDConnectProviderRequest$, () => __Unit
];
exports.UntagPolicy$ = [9, n0, _UP,
    0, () => exports.UntagPolicyRequest$, () => __Unit
];
exports.UntagRole$ = [9, n0, _UR,
    0, () => exports.UntagRoleRequest$, () => __Unit
];
exports.UntagSAMLProvider$ = [9, n0, _USAMLP,
    0, () => exports.UntagSAMLProviderRequest$, () => __Unit
];
exports.UntagServerCertificate$ = [9, n0, _USC,
    0, () => exports.UntagServerCertificateRequest$, () => __Unit
];
exports.UntagUser$ = [9, n0, _UU,
    0, () => exports.UntagUserRequest$, () => __Unit
];
exports.UpdateAccessKey$ = [9, n0, _UAK,
    0, () => exports.UpdateAccessKeyRequest$, () => __Unit
];
exports.UpdateAccountPasswordPolicy$ = [9, n0, _UAPP,
    0, () => exports.UpdateAccountPasswordPolicyRequest$, () => __Unit
];
exports.UpdateAssumeRolePolicy$ = [9, n0, _UARP,
    0, () => exports.UpdateAssumeRolePolicyRequest$, () => __Unit
];
exports.UpdateDelegationRequest$ = [9, n0, _UDR,
    0, () => exports.UpdateDelegationRequestRequest$, () => __Unit
];
exports.UpdateGroup$ = [9, n0, _UG,
    0, () => exports.UpdateGroupRequest$, () => __Unit
];
exports.UpdateLoginProfile$ = [9, n0, _ULP,
    0, () => exports.UpdateLoginProfileRequest$, () => __Unit
];
exports.UpdateOpenIDConnectProviderThumbprint$ = [9, n0, _UOIDCPT,
    0, () => exports.UpdateOpenIDConnectProviderThumbprintRequest$, () => __Unit
];
exports.UpdateRole$ = [9, n0, _URp,
    0, () => exports.UpdateRoleRequest$, () => exports.UpdateRoleResponse$
];
exports.UpdateRoleDescription$ = [9, n0, _URD,
    0, () => exports.UpdateRoleDescriptionRequest$, () => exports.UpdateRoleDescriptionResponse$
];
exports.UpdateSAMLProvider$ = [9, n0, _USAMLPp,
    0, () => exports.UpdateSAMLProviderRequest$, () => exports.UpdateSAMLProviderResponse$
];
exports.UpdateServerCertificate$ = [9, n0, _USCp,
    0, () => exports.UpdateServerCertificateRequest$, () => __Unit
];
exports.UpdateServiceSpecificCredential$ = [9, n0, _USSC,
    0, () => exports.UpdateServiceSpecificCredentialRequest$, () => __Unit
];
exports.UpdateSigningCertificate$ = [9, n0, _USCpd,
    0, () => exports.UpdateSigningCertificateRequest$, () => __Unit
];
exports.UpdateSSHPublicKey$ = [9, n0, _USSHPK,
    0, () => exports.UpdateSSHPublicKeyRequest$, () => __Unit
];
exports.UpdateUser$ = [9, n0, _UUp,
    0, () => exports.UpdateUserRequest$, () => __Unit
];
exports.UploadServerCertificate$ = [9, n0, _USCpl,
    0, () => exports.UploadServerCertificateRequest$, () => exports.UploadServerCertificateResponse$
];
exports.UploadSigningCertificate$ = [9, n0, _USCplo,
    0, () => exports.UploadSigningCertificateRequest$, () => exports.UploadSigningCertificateResponse$
];
exports.UploadSSHPublicKey$ = [9, n0, _USSHPKp,
    0, () => exports.UploadSSHPublicKeyRequest$, () => exports.UploadSSHPublicKeyResponse$
];
