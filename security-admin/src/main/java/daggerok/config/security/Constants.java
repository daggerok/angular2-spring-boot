package daggerok.config.security;

public final class Constants {

    public static final String[] API_MAPPINGS = {
            "/api/**"
    };

    public static final String[] ADMIN_MAPPINGS = {
            "/admin",
            "/admin/**"
    };

    public static final String[] PUBLIC_MAPPINGS = {
            "/",
            "/assets/**",
            "/webjars/**"
    };

    /**
     * Roles
     */
    public static final String USER = "USER";
    public static final String OPERATOR = "OPERATOR";
    public static final String SUPERADMIN = "SUPERADMIN";
    public static final String LOCAL_USER = "LOCAL_USER";
    public static final String LOCAL_ADMIN = "LOCAL_ADMIN";
    public static final String CONFIG_USER = "CONFIG_USER";
    public static final String CONFIG_ADMIN = "CONFIG_ADMIN";

    public static final String JSESSIONID = "JSESSIONID";

    private Constants() {}
}
