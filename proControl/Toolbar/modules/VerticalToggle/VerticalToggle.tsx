import { Flex, Relative, Absolute, Box } from "@proControl/lib/ui/layout"
import { Icon, Divider } from "@proControl/lib/ui/components"

export const VerticalToggle = () => {
  //
  // effects
  //

  const packMLMode = "Production" as any
  const enable = false

  return (
    <Flex
      b="2px solid $borderOnDark"
      flxDirection="column"
      r="$lg"
      ai="center"
      jc="center"
      w="62px"
    >
      {/** Maintenace Mode */}
      <>
        <Relative
          w="60px"
          h="70px"
          bg={packMLMode === "Maintenance" ? "$light" : "transparent"}
          rt="5px"
          p="$sm"
          css={{ cursor: "pointer" }}
        >
          <Icon
            name="maintenanceMode"
            color={packMLMode === "Maintenance" ? "$dark" : enable ? "white" : "$gray800"}
          />
          {packMLMode === "Maintenance" && (
            <Absolute w="20px" right="-1px" bottom="6px">
              <Box s="16px">
                <Icon name="corner" color="$blue900" />
              </Box>
            </Absolute>
          )}
        </Relative>
      </>

      {/** Divider */}
      {packMLMode === "Manual" && <Divider direction="row" size="80%" />}

      {/** Production Mode */}
      <Box
        w="60px"
        h={packMLMode === "Production" ? "71px" : "70px"}
        bg={packMLMode === "Production" ? "$light" : "transparent"}
        p="$sm"
        css={{ cursor: "pointer" }}
      >
        <Icon
          name="productionMode"
          color={
            packMLMode === "Production"
              ? "$dark"
              : enable || packMLMode === "Manual"
              ? "white"
              : "$gray800"
          }
        />
      </Box>

      {/** Divider */}
      {packMLMode === "Maintenance" && <Divider direction="row" size="80%" />}

      {/** Manual Mode*/}
      <Relative
        w="60px"
        h="70px"
        bg={packMLMode === "Manual" ? "$light" : "transparent"}
        p="$sm"
        rb="5px"
        css={{ cursor: "pointer" }}
      >
        <Icon
          name="manualMode"
          color={
            packMLMode === "Manual"
              ? "$dark"
              : enable || packMLMode === "Production"
              ? "white"
              : "$gray800"
          }
        />
        {packMLMode === "Manual" && (
          <Absolute w="20px" right="0px" bottom="6px">
            <Box s="16px">
              <Icon name="corner" color="$blue900" />
            </Box>
          </Absolute>
        )}
      </Relative>
    </Flex>
  )
}
